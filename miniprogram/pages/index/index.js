import { observable, action } from 'mobx-miniprogram';
import { createStoreBindings } from 'mobx-miniprogram-bindings';

const store = observable({
  // 统计数据
  totalItems: 0,
  warningItems: 0,
  expiringItems: 0,
  warnings: [],
  recentOperations: [],

  // 更新统计数据
  updateStats: action(function(stats) {
    this.totalItems = stats.total;
    this.warningItems = stats.warning;
    this.expiringItems = stats.expiring;
  }),

  // 更新预警列表
  updateWarnings: action(function(warnings) {
    this.warnings = warnings;
  }),

  // 更新最近操作
  updateOperations: action(function(operations) {
    this.recentOperations = operations;
  })
});

Page({
  data: {
    totalItems: 0,
    warningItems: 0,
    expiringItems: 0,
    warnings: [],
    recentOperations: []
  },

  onLoad() {
    // 绑定 MobX Store
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['totalItems', 'warningItems', 'expiringItems', 'warnings', 'recentOperations'],
      actions: ['updateStats', 'updateWarnings', 'updateOperations']
    });

    // 加载初始数据
    this.loadPageData();
  },

  onUnload() {
    this.storeBindings.destroyStoreBindings();
  },

  async loadPageData() {
    try {
      // 获取统计数据
      const stats = await wx.cloud.callFunction({
        name: 'getStats'
      });
      this.updateStats(stats.result);

      // 获取预警信息
      const warnings = await wx.cloud.callFunction({
        name: 'getWarnings'
      });
      this.updateWarnings(warnings.result);

      // 获取最近操作记录
      const operations = await wx.cloud.callFunction({
        name: 'getRecentOperations'
      });
      this.updateOperations(operations.result);
    } catch (error) {
      wx.showToast({
        title: '数据加载失败',
        icon: 'none'
      });
      console.error('加载首页数据失败：', error);
    }
  },

  // 页面跳转方法
  navigateToScan() {
    wx.navigateTo({
      url: '/pages/scan/index'
    });
  },

  navigateToMap() {
    wx.navigateTo({
      url: '/pages/inventory/map'
    });
  },

  navigateToVoiceSearch() {
    wx.navigateTo({
      url: '/pages/inventory/search?type=voice'
    });
  },

  navigateToInventory() {
    wx.switchTab({
      url: '/pages/inventory/list'
    });
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/inventory/detail?id=${id}`
    });
  },

  // 下拉刷新
  async onPullDownRefresh() {
    await this.loadPageData();
    wx.stopPullDownRefresh();
  }
});