import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMode, IonicIdentityVaultUser, VaultConfig } from '@ionic-enterprise/identity-vault';
import { Platform } from '@ionic/angular';
import { MyCustomSession } from '../interfaces/my-custom-session.interface';

@Injectable({
  providedIn: 'root'
})
export class IdentityService extends IonicIdentityVaultUser<MyCustomSession> {

  constructor(private http: HttpClient, private router: Router, platform: Platform) {
    super(platform, {
      authMode: AuthMode.BiometricAndPasscode, // Use biometrics auth with passcode fallback
      restoreSessionOnReady: false, // whether or not to immediately attempt to restore the session when the vault is ready
      unlockOnReady: false, // set true to auto prompt the user to unlock when vault is ready
      unlockOnAccess: true, // set to true to auto prompt the user to unlock on first read access
      lockAfter: 5000, // lock after 5 seconds in the background
      hideScreenOnBackground: true // when in app launcher mode hide the current screen and display the splashscreen
    });
  }

  onVaultUnlocked(config: VaultConfig) {
    //Route to my home page
  }

  onVaultLocked() {
    //Route to my login page
  }

  async onPasscodeRequest(isPasscodeSetRequest: boolean) {
    // Display a custom Passcode prompt and return the passcode as a string
    // or return undefined to use the build in native prompts. isPasscodeSetRequest
    // is true when attempting to set a new passcode on the vault, you can use
    // it to do something like prompt the user twice for the pin.
    return null;
  }

}
