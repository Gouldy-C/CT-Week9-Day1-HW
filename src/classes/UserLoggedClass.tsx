export default class UserState{
  public get userLoggedIn(): boolean {
    return this._userLoggedIn;
  }
  public set userLoggedIn(value: boolean) {
    this._userLoggedIn = value;
  }
  constructor(private _userLoggedIn: boolean = false){
    this._userLoggedIn = _userLoggedIn
  }
}