(function () {
    var DBMgr = (function () {
    var instance;

    function DatabasManager() {
        this.hostname = "localhost";
        this.port = 3306;
        this.database = "soupair_proyekte";
    }

    function createInstance() {
        var object = new DatabasManager();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var instance1 = DBMgr.getInstance();
console.log(instance1);
var instance2 = DBMgr.getInstance();
console.log(instance2);

console.log("Same instance? " + (instance1 === instance2));

})();
