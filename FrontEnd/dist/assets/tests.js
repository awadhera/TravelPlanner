'use strict';

define('travelplanner/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/devise.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/devise.js should pass ESLint\n\n');
  });

  QUnit.test('authorizers/devise.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/devise.js should pass ESLint\n\n');
  });

  QUnit.test('components/login-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/report-dropdown.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/report-dropdown.js should pass ESLint\n\n');
  });

  QUnit.test('components/signup-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/signup-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/trip-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/trip-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/validated-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/validated-input.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/signup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/signup.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/trips/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/trips/edit.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/trips/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/trips/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/trips/report.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/trips/report.js should pass ESLint\n\n');
  });

  QUnit.test('models/trip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/trip.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/signup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signup.js should pass ESLint\n\n');
  });

  QUnit.test('routes/signupsuccess.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signupsuccess.js should pass ESLint\n\n');
  });

  QUnit.test('routes/trips.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trips.js should pass ESLint\n\n');
  });

  QUnit.test('routes/trips/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trips/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/trips/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trips/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/trips/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trips/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/trips/report.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trips/report.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('services/session-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/session-account.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/date.js should pass ESLint\n\n');
  });

  QUnit.test('validators/email-available.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'validators/email-available.js should pass ESLint\n\n');
  });
});
define('travelplanner/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    _ember.default.run(application, 'destroy');
  }
});
define('travelplanner/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  var TEST_CONTAINER_KEY = 'authenticator:test'; /* global wait */

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
define('travelplanner/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'travelplanner/tests/helpers/start-app', 'travelplanner/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = _ember.default.RSVP.resolve;
});
define('travelplanner/tests/helpers/resolver', ['exports', 'travelplanner/resolver', 'travelplanner/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('travelplanner/tests/helpers/start-app', ['exports', 'ember', 'travelplanner/app', 'travelplanner/config/environment'], function (exports, _ember, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = _ember.default.merge({}, _environment.default.APP);
    attributes = _ember.default.merge(attributes, attrs); // use defaults, but you can override;

    return _ember.default.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('travelplanner/tests/integration/components/login-form-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('login-form', 'Integration | Component | login form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "JusPOLL8",
      "block": "{\"statements\":[[1,[26,[\"login-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "hdEZxf8E",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"login-form\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('travelplanner/tests/integration/components/paper-pikaday-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('paper-pikaday', 'Integration | Component | paper pikaday', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "TBt1q/FL",
      "block": "{\"statements\":[[1,[26,[\"paper-pikaday\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "PvQ53PO+",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"paper-pikaday\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('travelplanner/tests/integration/components/report-dropdown-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('report-dropdown', 'Integration | Component | report dropdown', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "RvQGGR3E",
      "block": "{\"statements\":[[1,[26,[\"report-dropdown\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "fexiteXy",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"report-dropdown\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('travelplanner/tests/integration/components/signup-form-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('signup-form', 'Integration | Component | signup form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Cih1v+9u",
      "block": "{\"statements\":[[1,[26,[\"signup-form\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "vB5uDh74",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"signup-form\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('travelplanner/tests/integration/components/trip-filter-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('trip-filter', 'Integration | Component | trip filter', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "AUqihQ4Q",
      "block": "{\"statements\":[[1,[26,[\"trip-filter\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "3wUrGLlz",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"trip-filter\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('travelplanner/tests/integration/components/trip-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('trip-item', 'Integration | Component | trip item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "kkn/6JOh",
      "block": "{\"statements\":[[1,[26,[\"trip-item\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "Cwyrlgcb",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"trip-item\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('travelplanner/tests/integration/components/validated-input-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('validated-input', 'Integration | Component | validated input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "gZbdO+96",
      "block": "{\"statements\":[[1,[26,[\"validated-input\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "otldOmRB",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"validated-input\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('travelplanner/tests/test-helper', ['travelplanner/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('travelplanner/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/login-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/paper-pikaday-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/paper-pikaday-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/report-dropdown-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/report-dropdown-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/signup-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/signup-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/trip-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trip-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/trip-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/trip-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/validated-input-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/validated-input-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/signup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/signup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/trips/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/trips/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/trip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/trip-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/signup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/signupsuccess-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signupsuccess-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/trip-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/trip-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/trips/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/trips/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/trips/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/trips/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/trips/report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/trips/report-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/date-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/validators/email-available-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/validators/email-available-test.js should pass ESLint\n\n');
  });
});
define('travelplanner/tests/unit/controllers/signup-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:signup', 'Unit | Controller | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('travelplanner/tests/unit/controllers/trips/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:trips/index', 'Unit | Controller | trips/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('travelplanner/tests/unit/models/trip-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('trip', 'Unit | Model | trip', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('travelplanner/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('travelplanner/tests/unit/routes/dashboard-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/routes/signup-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:signup', 'Unit | Route | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/routes/signupsuccess-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:signupsuccess', 'Unit | Route | signupsuccess', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/routes/trip-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:trip', 'Unit | Route | trip', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/routes/trips/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:trips/index', 'Unit | Route | trips/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/routes/trips/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:trips/new', 'Unit | Route | trips/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/routes/trips/report-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:trips/report', 'Unit | Route | trips/report', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('travelplanner/tests/unit/transforms/date-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('transform:date', 'Unit | Transform | date', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });
});
define('travelplanner/tests/unit/validators/email-available-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('validator:email-available', 'Unit | Validator | email-available', {
    needs: ['validator:messages']
  });

  (0, _emberQunit.test)('it works', function (assert) {
    var validator = this.subject();
    assert.ok(validator);
  });
});
require('travelplanner/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
