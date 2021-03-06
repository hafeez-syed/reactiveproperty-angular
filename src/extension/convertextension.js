
    Rx.Observable.prototype.toReactiveProperty = function ($scope, initValue, mode) {
        var source = this;
        return new rxprop.ReactiveProperty($scope, initValue, mode, source);
    };

    Rx.Observable.prototype.toReactiveCollection = function ($scope) {
        var source = this;
        return new rxprop.ReactiveCollection($scope, source);
    };

    Rx.Observable.prototype.toReactiveCommand = function ($scope) {
        var source = this;
        return new rxprop.ReactiveCommand($scope, source);
    };
