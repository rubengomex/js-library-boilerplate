import chai from 'chai'
import { expect, should } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiPromise from 'chai-as-promised'

global.expect = expect
global.sinon = sinon

should()
chai.use(sinonChai)
chai.use(chaiPromise)
