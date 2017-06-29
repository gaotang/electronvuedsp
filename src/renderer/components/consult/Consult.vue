<template>
  <div>
    <Tabs value="name1">
      <Tab-pane :label="label" name="name1">
        <table style="width:100%;">
          <tr>
            <td style="vertical-align: top; width:25%;">
              <div class="user-list" :style="{ height: customerHeight}">
                <template v-for="item in customerList">
                  <Card @click.native="OnClickByCustomer(item)">
                    <Row class="user-avator-list">
                      <Col span="4">
                      <img :src="item.PhotoUrl">
                      </Col>
                      <Col span="20">
                      <Row>
                        <Col span="20">
                        <label>{{ item.Nickname }}({{ item.CustomerName }})</label>
                        </Col>
                        <Col span="4">
                        <Button type="dashed" size="small" :title="item.DeptName">{{ item.DeptName | subStr }}</Button>
                        </Col>
                        <Col span="24">
                        <label for="CommitOn">{{ item.CommitOn | clearT }}</label>
                        </Col>
                      </Row>
                      </Col>
                    </Row>
                  </Card>
                </template>
              </div>
              <div style="margin: 10px 0;">
                <Page :total="customerCount" size="small" @on-change="OnChangeCustomers"></Page>
              </div>
            </td>
            <td style="vertical-align: top; width:45%;">
              <div>
                <Card>
                  <p class="userinfo">
                    <label for="username">{{ customer.CustomerName }}</label>
                    <label for="moblie">{{ customer.Mobile }}</label>
                    <label for="sex">{{ gender }}</label>
                    <label for="sex">{{ age }}</label>
                    <Button type="success" size="small" icon="ios-paperplane" @click="OnClickTrunOver">转交</Button>
                  </p>
                </Card>
                <div ref="userList" class="user-list" :style="{ height: contentHeight }">
                  <template v-for="item in consultList">
                    <Card v-if="item.IsDoctorReply == 0">
                      <p slot="title" class="user-avator">
                        <img :src="item.PhotoUrl">
                        <label>{{item.CommitOn | clearT }}</label>
                      </p>
                      <p class="user-content" v-html="item.Content"></p>
                    </Card>
                    <Card v-if="item.IsDoctorReply == 1">
                      <p slot="title" class="doctor-avator">
                        <label>{{item.CommitOn | clearT }}</label>
                        <img :src="item.PhotoUrl">
                      </p>
                      <p class="doctor-content" v-html="item.Content"></p>
                    </Card>
                  </template>
                </div>
              </div>
            </td>
            <td style="vertical-alignalign: top; width:30%;">
              <div>
                <Input v-model="formItem.textarea" @on-change="OnChangeMessage" type="textarea" :autosize="{minRows: 32,maxRows: 5}" placeholder="请输入您要发送的消息..."></Input>
                <div class="send-bar">
                  <Button type="dashed" icon="cube">商品推送</Button>
                  <Button type="dashed" icon="compose">问卷推送</Button>
                  <Button type="dashed" icon="image">发送图片</Button>
                  <Button type="dashed" icon="chatbox">发送短语</Button>
                  <!--<Button type="text" icon="arrow-down-b"></Button>-->
                  <Dropdown placement="top">
                    <a href="javascript:void(0)">
                      <Icon type="arrow-down-b"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                      <div style="text-align: right;margin:10px;">
                        <Button type="dashed">你好</Button>
                        <br>
                        <Button type="dashed">请关注</Button>
                        <br>
                        <Button type="dashed">关闭</Button>
                      </div>
                    </Dropdown-menu>
                  </Dropdown>
                </div>
                <Button type="primary" :loading="loading" icon="paper-airplane" @click="OnSendMessage" long>
                  <span v-if="!loading">回复 (Ctrl+Enter)</span>
                  <span v-else>发送中...</span>
                </Button>
              </div>
            </td>
          </tr>
        </table>
      </Tab-pane>
      <Tab-pane label="已处理" name="name2" icon="chatbubbles">已处理</Tab-pane>
      <Tab-pane label="转交问题" name="name3" icon="person-stalker">转交问题</Tab-pane>
    </Tabs>
    <Modal v-model="trunoverToggle" title="转交健管师" @on-ok="OnClickTrunOverOk" @on-cancel="OnClickTrunOverCancel" :mask-closable="false">
      <Collapse v-model="trunoverValue">
        <Panel name="1">
          史蒂夫·乔布斯
          <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
          斯蒂夫·盖瑞·沃兹尼亚克
          <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
          乔纳森·伊夫
          <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
      </Collapse>
    </Modal>
  </div>
</template>

<script>
import { consultService as service } from '@/services'

export default {
  name: 'consult',
  data() {
    return {
      customerHeight: '700px',
      contentHeight: '700px',
      label: (h) => {
        return h('div', [
          h('Icon', {
            props: {
              type: 'chatbubble-working'
            }
          }),
          h('span', '待处理'),
          h('Badge', {
            props: {
              count: 0
            }
          })
        ])
      },
      loading: false,
      customer: {
        CustomerName: '',
        Mobile: '',
        Birthday: '',
        Sex: ''
      },
      customerList: [],
      customerCount: 0,
      consultList: [],
      formItem: {
        textarea: ''
      },
      trunoverToggle: false,
      trunoverValue: '1'
    }
  },
  computed: {
    age() {
      if (this.customer.Birthday) {
        const [nowYear, birYear] = [new Date().getFullYear(), this.customer.Birthday.substring(0, 4)]
        return `${nowYear - birYear}岁`
      }
      return ''
    },
    gender() {
      if (this.customer.Sex === '1') return '男'
      if (this.customer.Sex === '0') return '女'
      return ''
    }
  },
  watch: {
    customerCount(val) {
      this.label = (h) => {
        return h('div', [
          h('Icon', {
            props: {
              type: 'chatbubble-working'
            }
          }),
          h('span', '待处理'),
          h('Badge', {
            props: {
              count: val
            }
          })
        ])
      }
    }
  },
  mounted() {
    this.OnGlobal()
    this.OnClickByGetCustomers()
  },
  methods: {
    OnGlobal() {
      // let contentHeight = document.body.scrollHeight
      // const [navHeight, subNavHeight, pageHeight, footerHeight, otherHeight] = [60, 50, 44, 78, 40]
      // console.log(`contentHeight:${contentHeight - navHeight - subNavHeight - pageHeight - footerHeight - otherHeight}`)
      const [scrollHeight, navHeight, subNavHeight, pageHeight, userCardHeight, otherHeight] = [document.body.scrollHeight, 60, 50, 44, 56, 40]
      this.customerHeight = `${scrollHeight - navHeight - subNavHeight - pageHeight - otherHeight}px`
      this.contentHeight = `${scrollHeight - navHeight - subNavHeight - userCardHeight - otherHeight}px`

      const self = this
      document.onkeydown = function (e) {
        e = window.event || event || e
        // enter 键
        if (e && (e.ctrlKey) && (e.keyCode === 13)) {
          self.OnSendMessage()
        }
        // if (e && (e.ctrlKey) && (e.keyCode === 50)) {
        //   if (e.keyCode === 49) {
        //     self.OnSendMessage()
        //   }
        // }
      }
    },
    OnClickByGetCustomers(skip = 0, take = 10, flag = 3) {
      const self = this
      const { user } = this.$caches
      if (user.doctorId) {
        service.Customs(user.doctorId, skip, take, flag)
          .then(function (json) {
            self.customerList = json.Data
            self.customerCount = json.Count
            self.consultList = json.FirstRecords
            if (json.Count) {
              // console.log(json.Data)
              Object.assign(self.customer, json.Data[0])
            }
            console.log(self.$refs.userList)
          })
          .catch(function (error) {
            console.log('error:', error)
          })
      } else {
        this.$Message.info('请先登录！')
        window.location.href = '/'
      }
    },
    OnChangeCustomers(currentPage) {
      let skip = (currentPage - 1) * 10
      this.OnClickByGetCustomers(skip)
    },
    OnClickByCustomer(item) {
      const self = this
      Object.assign(self.customer, item)
      service.ConsultRecords({ customId: item.CustomerId, lastId: item.DpetId })
        .then(function (json) {
          self.consultList = json
        })
        .catch(function (error) {
          console.log('error:', error)
        })
    },
    OnClickTrunOver() {
      this.trunoverToggle = true
    },
    OnClickTrunOverOk() {
      this.$Notice.open({
        title: '转交通知',
        desc: '您点击了转交通知保存！！'
      })
    },
    OnClickTrunOverCancel() {
      this.$Notice.open({
        title: '转交通知',
        desc: '您点击了转交通知取消！！'
      })
    },
    OnChangeMessage(event) {
      var { value } = event.target
      if (value.indexOf('@') !== -1) {
        this.trunoverToggle = true
      }
    },
    OnSendMessage() {
      const { doctorId } = this.$caches.user
      this.$Notice.open({
        title: '通知',
        desc: `当前健管师编号${doctorId}`
      })
    }
  }
}
</script>
<style scoped>
.userinfo {
  text-align: left;
}

.userinfo label {
  padding: 0 5px;
}

.user-list {
  overflow-x: hidden;
  overflow-y: auto;
}

.user-avator-list {
  cursor: pointer;
  text-align: left;
}

.user-avator-list img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
}

.user-avator {
  line-height: 16px;
  text-align: left;
}

.user-avator img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.user-content {
  text-align: left;
}

.doctor-avator {
  line-height: 16px;
  text-align: right;
}

.doctor-content {
  text-align: right;
}

.doctor-avator img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.send-bar {
  text-align: left;
  margin: 5px 0;
}
</style>
