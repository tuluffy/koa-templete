class WelcomeCtrl {
    welcome() {
        return (
              async (ctx, next) => {
                  const {body = {}} = ctx.request;

                  ctx.body = {
                      success: true,
                      data: {
                          code: 1,
                          msg: '欢迎使用lu-cli!'
                      }
                  };
              }
        )
    };
};

export default WelcomeCtrl;