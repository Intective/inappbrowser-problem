let runningActivities = [];

// Custom Application which tracks running activities
// ref: https://github.com/proyecto26/react-native-inappbrowser/issues/213#issuecomment-878915862
@NativeClass()
@JavaProxy("org.nativescript.custom.Application")
class Application extends android.app.Application {
  public onCreate(): void {
    super.onCreate();
  }

  public attachBaseContext(baseContext: android.content.Context) {
    super.attachBaseContext(baseContext);
  }

  public addActivityToStack(cls) {
    if (!runningActivities.includes(cls)) runningActivities.push(cls);
  }

  public removeActivityFromStack(cls) {
    const index = runningActivities.findIndex((c) => c == cls);
    if (index > -1) runningActivities.splice(index, 1);
  }

  public isActivityInBackStack(cls) {
    return runningActivities.includes(cls);
  }
}
