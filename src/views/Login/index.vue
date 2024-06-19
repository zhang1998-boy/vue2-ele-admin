<!-- eslint-disable import/no-duplicates -->
<template>
  <div class="login_container">
    <div class="login_div">
      <img
        src="../../assets/img/login2.png"
        alt=""
        style="
          width: 180px;
          height: 180px;
          position: absolute;
          left: -102px;
          top: -105px;
        "
      />
      <img
        src="../../assets/img/spatialmodel.png"
        alt=""
        style="
          width: 80px;
          height: 80px;
          position: absolute;
          right: 16%;
          top: 20px;
        "
      />
      <!-- 密码登陆/短信登陆 -->
      <div v-if="procedure === 'login'">
        <a-tabs
          active-Key="activeKey"
          :tabBarStyle="{ textAlign: 'center' }"
          :animated="false"
          @change="callback"
        >
          <!-- 密码登陆 -->
          <a-tab-pane key="1" tab="密码登录">
            <a-form-model
              ref="passwordform"
              :model="passwordform"
              style="margin-top: 20px"
              :rules="passwordRulse"
            >
              <a-form-model-item prop="mobile" ref="mobile">
                <a-input
                  size="large"
                  v-model="passwordform.mobile"
                  placeholder="请输入手机号码"
                />
              </a-form-model-item>

              <a-form-model-item prop="password" ref="password">
                <a-input-password
                  size="large"
                  v-model="passwordform.password"
                  placeholder="请输入登录密码"
                />
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
          <!-- 短信登陆 -->
          <a-tab-pane key="2" tab="短信登录">
            <a-form-model
              ref="rulenoteloginForm"
              :model="noteloginForm"
              :rules="noteloginRulse"
              style="margin-top: 20px"
            >
              <a-form-model-item prop="mobile" ref="mobile">
                <a-input
                  size="large"
                  v-model="noteloginForm.mobile"
                  placeholder="请输入手机号码"
                />
              </a-form-model-item>
              <a-form-model-item prop="sms_code" ref="sms_code">
                <a-input
                  size="large"
                  v-model="noteloginForm.sms_code"
                  placeholder="请输入验证码"
                >
                  <a-button
                    style="
                      padding-right: 10px;
                      color: #0855ec;
                      border: none;
                      background-color: #fff;
                    "
                    :disabled="noteloginBtnDisable"
                    @click="getNoteloginCode(noteloginForm.mobile, 'login')"
                    slot="suffix"
                    type="text"
                    >{{ codeBtnWord1 }}</a-button
                  >
                </a-input>
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
        </a-tabs>
        <!-- 记住账户/忘记密码按钮 -->
        <div style="display: flex; justify-content: space-between">
          <a-checkbox v-model="remember" class="check">记住账户</a-checkbox>
          <span style="color: #0855ec; cursor: pointer" @click="forget_password"
            >忘记密码</span
          >
        </div>
        <!-- 登陆按钮 -->
        <a-button
          type="primary"
          html-type="submit"
          style="
            width: 100%;
            margin: 20px 0;
            background: #0855ec;
            border: 1px solid #0855ec;
          "
          size="large"
          @click="onSubmit"
          >登录</a-button
        >
        <!-- 微信登陆/注册 -->
        <div style="width: 100%; display: flex; justify-content: space-between">
          <div style="display: flex">
            <img
              :src="require('@/assets/img/wx.png')"
              alt=""
              style="width: 22px; height: 22px; margin-right: 4px"
            />
            <span
              style="cursor: pointer; margin-top: 0px; color: #0855ec"
              @click="showDevelop"
              >微信登录</span
            >
          </div>
          <span style="color: #0855ec; cursor: pointer" @click="registerFn"
            >注册</span
          >
        </div>
      </div>
      <!-- 忘记密码➡️重置密码 -->
      <div v-if="procedure === 'reset_passwords'">
        <p style="font-size: 20px; font-weight: bold; color: #0855ec">
          重置密码
        </p>
        <a-form-model
          ref="resetPasswordForm"
          :model="resetPasswordForm"
          :rules="resetPasswordFormRulse"
          style="margin-top: 20px"
        >
          <a-form-model-item prop="mobile" ref="mobile">
            <a-input
              size="large"
              v-model="resetPasswordForm.mobile"
              placeholder="请输入手机号码"
            />
          </a-form-model-item>
          <a-form-model-item prop="sms_code" ref="sms_code">
            <a-input
              size="large"
              v-model="resetPasswordForm.sms_code"
              placeholder="请输入验证码"
            >
              <a-button
                style="
                  padding-right: 10px;
                  color: #0855ec;
                  border: none;
                  background-color: #fff;
                "
                :disabled="resetPasswordBtnDisable"
                @click="
                  getResetPasswordCode(resetPasswordForm.mobile, 'forget_pwd')
                "
                slot="suffix"
                type="text"
                >{{ codeBtnWord2 }}</a-button
              >
            </a-input>
            <!-- 解决浏览器自动填充账号密码错位问题 -->
            <a-input class="deal" type="text"></a-input>
          </a-form-model-item>
          <a-form-model-item prop="new_password" ref="new_password">
            <!-- 解决浏览器自动填充账号密码错位问题 -->
            <a-input class="deal" type="password"></a-input>
            <a-input-password
              size="large"
              v-model="resetPasswordForm.new_password"
              placeholder="请输入新密码"
            />
          </a-form-model-item>
          <a-form-model-item prop="new_password2" ref="new_password2">
            <a-input-password
              size="large"
              v-model="resetPasswordForm.new_password2"
              placeholder="请确认新密码"
            />
          </a-form-model-item>
        </a-form-model>
        <a-button
          type="primary"
          html-type="submit"
          style="
            width: 100%;
            margin: 0 0 16px 0;
            background: #0855ec;
            border: 1px solid #0855ec;
          "
          size="large"
          @click="resetFn"
          >重置</a-button
        >
        <span style="color: #8995a4; float: right; font-size: 14px"
          >记得密码,<span
            style="color: #0855ec; cursor: pointer"
            @click="Login_now('resetPassword')"
            >马上登录</span
          ></span
        >
      </div>

      <!-- 注册账号 -->
      <div v-if="procedure === 'register'">
        <p style="font-size: 20px; font-weight: bold; color: #0855ec">
          注册账号
        </p>
        <a-form-model
          ref="registerForm"
          :model="registerForm"
          :rules="registerRulse"
          style="margin-top: 20px"
        >
          <div v-if="registerNum === 0">
            <a-form-model-item prop="invitation_code" ref="invitation_code">
              <a-input
                size="large"
                v-model="registerForm.invitation_code"
                placeholder="请输入邀请码"
              />
            </a-form-model-item>
            <a-form-model-item prop="mobile" ref="mobile">
              <a-input
                size="large"
                v-model="registerForm.mobile"
                placeholder="请输入手机号码"
              />
            </a-form-model-item>
            <a-form-model-item prop="sms_code" ref="sms_code">
              <a-input
                size="large"
                v-model="registerForm.sms_code"
                placeholder="请输入验证码"
              >
                <a-button
                  style="
                    padding-right: 10px;
                    color: #0855ec;
                    border: none;
                    background-color: #fff;
                  "
                  slot="suffix"
                  :disabled="registerBtnDisable"
                  @click="getRegisterCode(registerForm.mobile, 'register')"
                  type="text"
                  >{{ codeBtnWord }}</a-button
                >
              </a-input>
            </a-form-model-item>
            <a-button
              type="primary"
              html-type="submit"
              style="
                width: 100%;
                margin: 20px 0;
                background: #0855ec;
                border: 1px solid #0855ec;
              "
              size="large"
              @click="next_step"
              >下一步</a-button
            >
            <p
              style="
                text-align: center;
                font-size: 14px;
                color: #8995a4;
                cursor: pointer;
              "
              @click="Login_now('register')"
            >
              返回登录页
            </p>
          </div>
          <div v-if="registerNum === 1">
            <a-form-model-item prop="real_name" ref="real_name">
              <a-input
                size="large"
                v-model="registerForm.real_name"
                placeholder="请输入姓名"
              />
            </a-form-model-item>
            <a-form-model-item prop="email" ref="email">
              <a-input
                size="large"
                v-model="registerForm.email"
                placeholder="请输入邮箱"
              />
              <!-- 解决浏览器自动填充账号密码错位问题 -->
              <a-input class="deal" type="text"></a-input>
            </a-form-model-item>
            <a-form-model-item prop="password" ref="password">
              <a-input-password
                size="large"
                v-model="registerForm.password"
                placeholder="请输入密码"
              />
            </a-form-model-item>
            <a-form-model-item prop="password2" ref="password2">
              <!-- 解决浏览器自动填充账号密码错位问题 -->
              <a-input class="deal" type="password"></a-input>
              <a-input-password
                size="large"
                v-model="registerForm.password2"
                placeholder="请确认密码"
              />
            </a-form-model-item>
            <a-button
              type="primary"
              html-type="submit"
              style="
                width: 100%;
                margin-bottom: 10px;
                background: #0855ec;
                border: 1px solid #0855ec;
              "
              size="large"
              @click="CompleteRegistration"
              >完成</a-button
            >
            <p
              style="
                text-align: center;
                font-size: 14px;
                color: #8995a4;
                cursor: pointer;
              "
              @click="go_back"
            >
              返回上一页
            </p>
          </div>
        </a-form-model>
      </div>
    </div>
    <!-- 右侧样式 -->
    <div class="style_div">
      <img
        src="../../assets/img/login1.png"
        alt=""
        style="
          width: 220px;
          height: 220px;
          position: absolute;
          bottom: 0;
          right: 20px;
        "
      />
      <div
        class="top"
        style="display: flex; padding: 30px; box-sizing: border-box"
      >
        <img
          src="../../assets/img/2.png"
          alt=""
          style="width: 40px; height: 40px"
        />
        <p
          style="
            font-size: 32px;
            color: #fff;
            font-weight: bold;
            margin-left: 20px;
          "
        >
          GatherOne
        </p>
      </div>
      <p
        style="font-size: 26px; color: #fff; font-weight: bold; margin: 0 30px"
      >
        你好，<br />欢迎来到运营工具系统
      </p>
      <el-upload action="" :show-file-list="false" :http-request="handleExceed">
        <el-button type="primary" class="rt-btn">导入</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
import {
  pwdlogin,
  getPhoneCode,
  verifySmsCode,
  forgetPassword,
  registrations,
  phonePwdlogin,
  achievementImport,
} from '@/api/login'
import { getUserInfo } from '@/api/personal.js'
export default {
  data() {
    // 手机号校验
    const validateNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        //获取工具类中的手机号正则表达式
        const phoneReg =
          /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        if (phoneReg.test(value)) {
          callback()
        } else {
          //如果验证输入错误就清空
          this.this.registerForm.mobile = ''
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    //校验验证码不得为空
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码为空'))
        return false
      } else {
        callback()
      }
    }
    // 二次输入密码校验
    const validatePassword2 = (rule, value, callback) => {
      if (value !== this.registerForm.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    // 二次输入密码校验-重置
    const validatePassword = (rule, value, callback) => {
      if (value !== this.resetPasswordForm.new_password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    // 邮箱校验
    const validateEmail = (rule, value, callback) => {
      const reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
      if (!reg.test(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    }
    return {
      activeKey: '1', // tabs切换绑定值
      remember: false,
      procedure: 'login', // 当前页面展示的步骤绑定值
      // 密码登录
      passwordform: {
        mobile: '',
        password: '',
      },
      // 密码登录校验
      passwordRulse: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validateNumber },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
      // 验证码登录
      noteloginForm: {
        mobile: '',
        sms_code: '',
      },
      // 验证码登录校验
      noteloginRulse: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validateNumber },
        ],
        sms_code: [
          {
            min: 6,
            max: 6,
            required: true,
            message: '验证码不符合要求',
            trigger: 'blur',
          },
        ],
      },
      // 重置密码绑定值
      resetPasswordForm: {
        mobile: '',
        sms_code: '',
        new_password: '',
        new_password2: '',
      },
      // 重置密码校验
      resetPasswordFormRulse: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validateNumber },
        ],
        sms_code: [
          {
            min: 6,
            max: 6,
            required: true,
            message: '验证码不符合要求',
            trigger: 'blur',
          },
        ],
        new_password: [
          { required: true, message: '请输入新密码', trigger: 'change' },
        ],
        new_password2: [
          { required: true, message: '请确认密码', trigger: 'change' },
          { validator: validatePassword },
        ],
      },
      registerNum: 0, // 注册显示步骤绑定值
      // 注册账号表单绑定值
      registerForm: {
        invitation_code: '', //邀请码
        mobile: '',
        sms_code: '', //短信验证码
        real_name: '', //姓名
        email: '',
        password: '', //密码
        password2: '', //确认密码
      },
      // 注册账号表单校验
      registerRulse: {
        invitation_code: [
          { required: true, message: '请输入邀请码', trigger: 'change' },
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { validator: validateNumber },
        ],
        sms_code: [
          {
            min: 6,
            max: 6,
            required: true,
            message: '验证码不符合要求',
            trigger: 'blur',
          },
        ],
        name: [{ required: true, message: '请输入姓名', trigger: 'change' }],
        email: [
          { required: true, message: '请输入邮箱' },
          { validator: validateEmail },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
        ],
        password2: [
          { required: true, message: '请确认密码', trigger: 'change' },
          { validator: validatePassword2 },
        ],
      },
      registerWaitTime: 61, // 获取注册验证码按钮失效时间
      noteloginWaitTime: 61, // 获取手机号验证码按钮失效时间
      resetPasswordWaitTime: 61, // 获取重置密码验证码按钮失效时间
      registerBtnDisable: true, // 获取注册验证码按钮禁用
      noteloginBtnDisable: true, // 获取手机号验证码按钮禁用
      resetPasswordBtnDisable: true, // 获取重置密码验证码按钮禁用
      codeBtnWord: '获取验证码', // 获取注册验证码按钮文字
      codeBtnWord1: '获取验证码', // 获取手机号短信验证码按钮文字
      codeBtnWord2: '获取验证码', // 获取重置密码验证码按钮文字
      resetPasswordTimer: null, //重置密码-验证码倒计时
      registerTimer: null, //注册-验证码倒计时
      noteloginTimer: null, //短信登陆-验证码倒计时
    }
  },
  watch: {
    //短信登陆 按钮禁用
    'noteloginForm.mobile': {
      handler(val) {
        if (this.phoneNumberStyle(val)) {
          this.noteloginWaitTime === 61
            ? (this.noteloginBtnDisable = false)
            : (this.noteloginBtnDisable = true)
        }
      },
      deep: true,
    },
    //注册登陆 按钮禁用
    'registerForm.mobile': {
      handler(val) {
        if (this.phoneNumberStyle(val)) {
          this.registerWaitTime === 61
            ? (this.registerBtnDisable = false)
            : (this.registerBtnDisable = true)
        }
      },
      deep: true,
    },
    //重置密码 按钮禁用
    'resetPasswordForm.mobile': {
      handler(val) {
        if (this.phoneNumberStyle(val)) {
          this.resetPasswordWaitTime === 61
            ? (this.resetPasswordBtnDisable = false)
            : (this.resetPasswordBtnDisable = true)
        }
      },
      deep: true,
    },
  },
  methods: {
    async handleExceed(e) {
      const restaurants = await achievementImport({
        file: e.file,
        type: 1,
      })
    },
    // tabs切换事件
    callback(key) {
      if (key == 2) {
        //短信验证码登录
        setTimeout(() => {
          this.$refs.rulenoteloginForm.resetFields()
          this.noteloginForm.mobile = ''
          this.noteloginForm.sms_code = ''
        }, 1)
        clearInterval(this.noteloginTimer)
        this.codeBtnWord1 = '获取验证码'
        this.noteloginBtnDisable = false
        this.noteloginWaitTime = 61
      } else {
        this.$refs.passwordform?.clearValidate()
      }
      setTimeout(() => {
        this.activeKey = key
      }, 100)
    },
    // 登录按钮
    onSubmit() {
      // 账号登录
      if (this.activeKey === '1') {
        this.$refs.passwordform.validate(async (valid) => {
          if (valid) {
            let { data, code, msg } = await pwdlogin(this.passwordform)
            if (code === 0) {
              if (this.remember) {
                // 处理记住密码的逻辑，将用户名和密码存储到localStorage中
                localStorage.setItem('mobile', this.passwordform.mobile)
                localStorage.setItem('password', this.passwordform.password)
              } else {
                localStorage.removeItem('mobile')
                localStorage.removeItem('password')
              }
              this.$store.dispatch('getuserInfo', data)
              this.$router.push('/registration/register')
            }
          }
        })
      } else {
        // 短信验证码登录
        this.$refs.rulenoteloginForm.validate(async (valid) => {
          if (valid) {
            let params = {
              ...this.noteloginForm,
            }
            let { data, code, msg } = await phonePwdlogin(params)
            if (code === 0) {
              this.$store.dispatch('getuserInfo', data)
              this.$router.push('/registration/register')
            } else {
              this.$message.error(msg)
            }
          }
        })
      }
    },
    // 获取用户详情
    // async getUserDetail() {
    //   let { code, msg, data } = await getUserInfo();
    //   if (code !== 0) return;
    //   let { real_name, avatar_url } = data;
    //   localStorage.setItem("userDataAvatar", avatar_url);
    //   localStorage.setItem("userDataName", real_name);
    //   this.$store.dispatch("setUserInfo", { real_name, avatar_url });
    //   this.$message.success("登录成功");
    //   this.$router.push("/registration/register");
    // },
    // 用于校验手机号码格式是否正确
    phoneNumberStyle(val) {
      let reg = /^1[3456789]\d{9}$/
      if (!reg.test(val)) {
        return false
      }
      return true
    },
    // 获取注册验证码
    getRegisterCode(val, type) {
      let status = this.getMessageCode(
        val,
        type,
        'registerBtnDisable',
        'registerWaitTime'
      )
      if (!status) return
      if (
        this.registerForm.mobile &&
        this.phoneNumberStyle(this.registerForm.mobile)
      ) {
        this.registerWaitTime--
        this.registerBtnDisable = true
        this.codeBtnWord = `${this.registerWaitTime}s 后重新获取`
        this.registerTimer = setInterval(() => {
          if (this.registerWaitTime > 1) {
            this.registerWaitTime--
            this.codeBtnWord = `${this.registerWaitTime}s 后重新获取`
          } else {
            clearInterval(this.registerTimer)
            this.codeBtnWord = '获取验证码'
            this.registerBtnDisable = false
            this.registerWaitTime = 61
          }
        }, 1000)
      } else {
        this.$message.warn('请正确输入手机号')
      }
    },
    // 获取短信登陆验证码
    async getNoteloginCode(val, type) {
      let status = await this.getMessageCode(
        val,
        type,
        'noteloginBtnDisable',
        'noteloginWaitTime'
      )
      if (!status) return
      if (
        this.noteloginForm.mobile &&
        this.phoneNumberStyle(this.noteloginForm.mobile)
      ) {
        this.noteloginWaitTime--
        this.noteloginBtnDisable = true
        this.codeBtnWord1 = `${this.noteloginWaitTime}s 后重新获取`
        this.noteloginTimer = setInterval(() => {
          if (this.noteloginWaitTime > 1) {
            this.noteloginWaitTime--
            this.codeBtnWord1 = `${this.noteloginWaitTime}s 后重新获取`
          } else {
            clearInterval(this.noteloginTimer)
            this.codeBtnWord1 = '获取验证码'
            this.noteloginBtnDisable = false
            this.noteloginWaitTime = 61
          }
        }, 1000)
      } else {
        this.$message.warn('请正确输入手机号')
      }
    },
    // 获取重置密码验证码
    getResetPasswordCode(val, type) {
      let status = this.getMessageCode(
        val,
        type,
        'resetPasswordBtnDisable',
        'resetPasswordWaitTime'
      )
      if (!status) return
      if (
        this.resetPasswordForm.mobile &&
        this.phoneNumberStyle(this.resetPasswordForm.mobile)
      ) {
        this.resetPasswordWaitTime--
        this.resetPasswordBtnDisable = true
        this.codeBtnWord2 = `${this.resetPasswordWaitTime}s 后重新获取`
        this.resetPasswordTimer = setInterval(() => {
          if (this.resetPasswordWaitTime > 1) {
            this.resetPasswordWaitTime--
            this.codeBtnWord2 = `${this.resetPasswordWaitTime}s 后重新获取`
          } else {
            clearInterval(this.resetPasswordTimer)
            this.codeBtnWord2 = '获取验证码'
            this.resetPasswordBtnDisable = false
            this.resetPasswordWaitTime = 61
          }
        }, 1000)
      } else {
        this.$message.warn('请正确输入手机号')
      }
    },
    //发送验证码
    async getMessageCode(val, type, Disable, Time) {
      let status = false
      const reg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      let phoneStatus = reg.test(val)
      if (phoneStatus) {
        let parms = {
          code_type: type,
          mobile: val,
        }
        try {
          let { code, msg } = await getPhoneCode(parms)
          if (code == 0) {
            this.$message.success(msg)
            status = true
          }
        } catch (error) {
          this[Time] = 0
          this[Disable] = false
        }
      } else {
        this.$message.warning('请输入正确的手机号')
      }
      return status
    },
    // 忘记密码按钮
    forget_password() {
      this.procedure = 'reset_passwords'
    },
    // 记得密码马上登录按钮
    Login_now(status) {
      this.procedure = 'login'
      this.activeKey = '1'
      if (status === 'resetPassword') {
        this.$refs.resetPasswordForm?.resetFields()
        clearInterval(this.resetPasswordTimer)
        this.codeBtnWord2 = '获取验证码'
        this.resetPasswordBtnDisable = false
        this.resetPasswordWaitTime = 61
      } else {
        this.$refs.registerForm?.resetFields()
        clearInterval(this.registerTimer)
        this.codeBtnWord = '获取验证码'
        this.registerBtnDisable = false
        this.registerWaitTime = 61
      }
    },
    // 重置按钮
    resetFn() {
      this.$refs.resetPasswordForm.validate(async (valid) => {
        if (valid) {
          let { code, msg } = await this.checkVerifySmsCode(
            this.resetPasswordForm.mobile,
            this.resetPasswordForm.sms_code,
            'forget_pwd'
          )
          if (code == 0) {
            this.resetPwd()
          }
        }
      })
    },
    //重置密码
    async resetPwd() {
      let data = {
        ...this.resetPasswordForm,
      }
      let { code, msg } = await forgetPassword(data)
      if (code == 0) {
        this.$message.success(msg)
        setTimeout(() => {
          this.procedure = 'login'
          this.activeKey = '1'
          this.$refs.resetPasswordForm.resetFields()
          // this.resetPasswordWaitTime = 0;
        }, 1000)
      }
    },
    //校验忘记密码-验证码
    async checkVerifySmsCode(mobile, sms_code, code_type) {
      let data1 = {
        mobile,
        sms_code,
        code_type,
      }
      let { code, msg } = await verifySmsCode(data1)
      return { code, msg }
    },
    // 注册按钮
    registerFn() {
      this.procedure = 'register'
    },
    // 注册账号下一步
    async next_step() {
      this.$refs.registerForm.validate(async (valid) => {
        if (valid) {
          if (
            this.registerForm.invitation_code &&
            this.registerForm.mobile &&
            this.registerForm.sms_code
          ) {
            let { code, msg } = await this.checkVerifySmsCode(
              this.registerForm.mobile,
              this.registerForm.sms_code,
              'register'
            )
            if (code == 0) {
              this.registerNum = 1
              this.$message.success(msg)
            }
          }
        }
      })
    },
    // 注册返回上一步
    go_back() {
      this.registerNum = 0
    },
    //完成注册
    async CompleteRegistration() {
      let params = { ...this.registerForm }
      let { code, msg } = await registrations(params)
      if (code == 0) {
        this.$message.success(msg)
        setTimeout(() => {
          this.procedure = 'login'
          this.activeKey = '1'
        }, 2000)
      }
    },
    //微信登录正在开发中
    showDevelop() {
      this.$notification.open({
        type: 'warning',
        message: '提示',
        description: '此功能正在开发中',
      })
    },
    getfile() {
      console.log(111)
    },
  },
  created() {
    this.getfile()
    // 在页面加载时检查localStorage中是否有记住的用户名和密码
    if (localStorage.getItem('mobile') && localStorage.getItem('password')) {
      this.passwordform.mobile = localStorage.getItem('mobile')
      this.passwordform.password = localStorage.getItem('password')
      this.remember = true
    }
  },
}
</script>

<style lang="less" scoped>
.deal {
  position: fixed;
  bottom: -9999px;
}
.login_container {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 140px;
  box-sizing: border-box;
  background-image: url(../../assets/img/background.png);
  background-size: cover;
}

.login_div {
  width: 50%;
  max-width: 960px;
  min-width: 580px;
  height: 440px;
  min-height: 440px;
  background: #e3f6fd;
  border-radius: 6px;
  position: relative;
  padding: 3% 160px 3% 60px;
  box-sizing: border-box;
}

.style_div {
  width: 32%;
  max-width: 615px;
  min-width: 360px;
  height: 80%;
  min-height: 560px;
  max-height: 860px;
  background: #0855ec;
  border-radius: 6px;
  margin-left: -100px;
  z-index: 100;
  position: relative;
}

/deep/.ant-input {
  background-color: #fff !important;
  border: none !important;
}
/deep/.has-error .ant-input {
  border: 1px solid #f5222d !important;
}
</style>
