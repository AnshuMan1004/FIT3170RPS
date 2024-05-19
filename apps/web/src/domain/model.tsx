import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Game as GameModel } from './game/game.model'

import { Round as RoundModel } from './round/round.model'

import { Player as PlayerModel } from './player/player.model'

import { Choice as ChoiceModel } from './choice/choice.model'

import { Result as ResultModel } from './result/result.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Game extends GameModel {}

  export class Round extends RoundModel {}

  export class Player extends PlayerModel {}

  export class Choice extends ChoiceModel {}

  export class Result extends ResultModel {}
}
