import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { settings } from '@/config/settings'
import { usersService } from '@/modules/users/users.service'

export const JWTStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: settings.SECRET
  },
  async (payload, done) => {
    try {
      const user = await usersService.findOne(payload.user_id)
      if (user == null) return done(null, false)
      return done(null, user)
    } catch (error) {
      done(error, false)
    }
  }
)

export const authenticate = passport.authenticate('jwt', { session: false })

// export const authenticateRefresh = (req: Request, res: Response, next: NextFunction) =>
//   passport.authenticate('jwt', { session: false }, async (error, user, info, status) => {
//     try {
//       if (info?.message == 'No auth token') throw new HTTPError(401, 'Unauthorized')

//       if (info?.message == 'jwt expired') {
//         const token = req.headers.authorization?.split(' ')[1]
//         const payload: any = jwt.verify(token!, settings.SECRET, { ignoreExpiration: true })

//         req.user = { id: payload.user_id }
//         return next()
//       }

//       req.user = user
//       next()
//     } catch (error) {
//       next(error)
//     }
//   })(req, res, next)
