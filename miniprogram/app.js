import { configure } from 'mobx';

// 配置 MobX
configure({
  enforceActions: 'always'
});

App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'your-env-id',
        traceUser: true
      });
    }

    // 获取系统信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
    });
  },

  globalData: {
    userInfo: null,
    StatusBar: null,
    CustomBar: null,
    // 物品类型
    itemTypes: [
      { id: 'reagent', name: '试剂' },
      { id: 'equipment', name: '器材' },
      { id: 'consumable', name: '耗材' }
    ],
    // 库存预警阈值
    stockWarningLevels: {
      low: 20,  // 低于20%报红
      medium: 50  // 低于50%报黄
    }
  }
});