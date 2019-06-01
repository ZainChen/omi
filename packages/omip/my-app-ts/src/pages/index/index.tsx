
import { WeElement, define } from 'omi'
import './index.css'
import png from '../../assets/omi-html.jpg'
import '@omim/core/text-field'
import '@omim/core/button'
import '@omim/core/dialog'
import '@omim/core/switch'
import '@omim/core/radio'
import '@omim/core/tree'

//获取应用实例
const app = getApp()

interface IData{
  motto: string,
  userInfo: any,
  hasUserInfo: boolean,
  canIUse: boolean
}


define('page-index', class extends WeElement {
  node = {
		title: 'p-0',
		id: 1,
		icon: 'account_balance_wallet',
		children: [
			{
				title: 'p-1',
				id: 2,
				icon: 'assignment_ind',
				children: [
					{ title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },
					{ title: 'p-2.5', id: 13, icon: 'chrome_reader_mode',children:[{
            title: 'p-1',
            id: 1112,
          }] }
				]
			},
			{
				title: 'p-4',
				id: 4,
				icon: 'extension',

				children: [
					{
						title: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,
						disabled: true
					},
					{ title: '项目六', id: 6, icon: 'favorite' },
					{ title: '项目7', id: 7 }
				]
			},
			{
				title: 'p-11',
				id: 14,
				icon: 'group_work',

				children: [
					{
						title: 'p-12', id: 12, icon: 'fingerprint', checked: true
					}
				]
			}
		]
	}
  data: IData = {
    motto: 'Hello Omip',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  }

  //事件处理函数
  bindViewTap = () => {
    wx.navigateTo({
      url: '../logs/index'
    })
  }

  gotoFilms = () => {
    wx.navigateTo({
      url: '../list/index'
    })
  }

  install() {
    if (app.globalData.userInfo) {
      this.data.userInfo = app.globalData.userInfo
      this.data.hasUserInfo = true
      this.update()
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.data.userInfo = res.userInfo
        this.data.hasUserInfo = true
        this.update()
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.data.userInfo = res.userInfo
          this.data.hasUserInfo = true
          this.update()
        }
      })
    }
  }

  getUserInfo = (e) => {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.data.userInfo = e.detail.userInfo
    this.data.hasUserInfo = true
    this.update()
  }

  render() {
    return (
      <view class="container">

      <m-text-field helper-text='Helper Text' label='Label1' />
      <m-text-field label='Label1' helper-text='Helper Text' />
      <m-button icon="add"a svg-icon={{
        path: 'M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z',
        color: '#0052d9',
        scale: 1.3
      }}>zain</m-button>
      {/* <m-dialog show={true}><h1>jane</h1></m-dialog> */}
      {/* <m-switch label='LabelA' value='omim A' ></m-switch> */}
      <m-radio checked label='checked'> </m-radio>
      {/* <m-tree
				checkbox
				node={this.node}>
			</m-tree> */}
      <image src={png}></image>
        <view class="userinfo">
          {(!this.data.hasUserInfo && this.data.canIUse) ? (
            <button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
          ) : (
              <block>
                <image bindtap={this.bindViewTap} class="userinfo-avatar" src={this.data.userInfo.avatarUrl} mode="cover"></image>
                <text class="userinfo-nickname">{this.data.userInfo.nickName}</text>
              </block>
            )}
        </view>
        <view class="usermotto">
          <text class="user-motto">{this.data.motto}</text>
        </view>

        <view >
          <button bindtap={this.gotoFilms}>点击打开 Omip 复杂案例</button>
        </view>
      </view>
    )
  }
})
