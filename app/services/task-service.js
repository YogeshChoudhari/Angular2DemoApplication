System.register(['angular2/http', 'angular2/core', '../datatypes/task'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, task_1;
    var TaskService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService(http) {
                    this.http = http;
                    console.log('Task Service created.', http);
                }
                TaskService.prototype.getTasks = function () {
                    // return an observable
                    return this.http.get('/api/v1/tasks')
                        .map(function (responseData) {
                        return responseData.json();
                    })
                        .map(function (tasks) {
                        var result = [];
                        if (tasks) {
                            tasks.forEach(function (task) {
                                result.push(new task_1.Task(task.id, task.description, task.priority, task.dueDate, task.complete));
                            });
                        }
                        return result;
                    });
                };
                TaskService.prototype.addTask = function (description, priority, dueDate) {
                    console.log('adding task - start', description, priority, dueDate);
                    var task = new task_1.Task(null, description, priority, dueDate, false);
                    return this.http.put('/api/v1/tasks', JSON.stringify(task));
                };
                TaskService.prototype.toggleComplete = function (task) {
                    if (task.complete !== true) {
                        task.setComplete();
                    }
                    else {
                        task.clearCompleteFlag();
                    }
                    console.log('completing task', task);
                    return this.http.post('/api/v1/tasks', JSON.stringify(task));
                };
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TaskService);
                return TaskService;
            })();
            exports_1("TaskService", TaskService);
        }
    }
});
//# sourceMappingURL=task-service.js.map