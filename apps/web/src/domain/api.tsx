import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { GameApi } from './game/game.api'

import { RoundApi } from './round/round.api'

import { PlayerApi } from './player/player.api'

import { ChoiceApi } from './choice/choice.api'

import { ResultApi } from './result/result.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Game extends GameApi {}

  export class Round extends RoundApi {}

  export class Player extends PlayerApi {}

  export class Choice extends ChoiceApi {}

  export class Result extends ResultApi {}
}
