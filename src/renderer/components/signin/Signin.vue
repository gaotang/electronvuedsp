<template>
  <div>
    <Modal v-model="modal" width="360" :closable="false" :mask-closable="false">
      <p slot="header" style="color:#f60text-align:center">
        <Icon type="person"></Icon>
        <span>登录</span>
      </p>
      <div style="text-align:center">
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </Form-item>
          <Form-item prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </Form-item>
        </Form>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="modal_loading" @click="handleSubmit('formInline')">登录</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { signinService as service } from '@/services'

export default {
  name: 'signin',
  data() {
    return {
      modal_loading: false,
      modal: true,
      formInline: {
        user: 'yuanwentao001',
        password: '111111'
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.modal_loading = true
      this.$refs[name].validate((valid) => {
        if (valid) {
          const self = this
          const [uid, pwd] = Object.values(this.formInline)
          service.Login(uid, pwd)
            .then(function (json) {
              self.$caches.isLogin = true
              Object.assign(self.$caches.user, json)
              self.modal_loading = false
              self.modal = false
              self.$Message.success('登录成功!')
            })
            .catch(function (error) {
              self.modal_loading = false
              self.$Message.error(`错误：${error}`)
            })
        } else {
          this.modal_loading = false
          this.$Message.error('登录失败!')
        }
      })
    }
  }
}
</script>
