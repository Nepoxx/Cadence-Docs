(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{453:function(e,t,r){"use strict";r.r(t);var a=r(13),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"deployment-topology"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment-topology"}},[e._v("#")]),e._v(" Deployment topology")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("Cadence is a highly scalable fault-oblivious stateful code platform. The fault-oblivious code is a next level of abstraction over commonly used techniques to achieve fault tolerance and durability.")]),e._v(" "),r("p",[e._v("A common Cadence-based application consists of a Cadence service, "),r("Term",{attrs:{term:"workflow"}}),e._v(" and "),r("Term",{attrs:{term:"activity_worker",show:"activity_workers"}}),e._v(", and external clients.\nNote that both types of "),r("Term",{attrs:{term:"worker",show:"workers"}}),e._v(" as well as external clients are roles and can be collocated in a single application process if necessary.")],1),e._v(" "),r("h2",{attrs:{id:"cadence-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cadence-service"}},[e._v("#")]),e._v(" Cadence Service")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/14902200/160308507-2854a98a-0582-4748-87e4-e0695d3b6e86.jpg",alt:"Cadence Architecture"}})]),e._v(" "),r("p",[e._v("At the core of Cadence is a highly scalable multitentant service. The service exposes all of its functionality through a strongly typed "),r("a",{attrs:{href:"https://github.com/uber/cadence-idl/tree/master/proto/uber/cadence/api/v1",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC API"),r("OutboundLink")],1),e._v(". A Cadence cluster include multiple services, each of which may run on multiple nodes for scalability and reliablity:")]),e._v(" "),r("ul",[r("li",[e._v("Front End: which is a stateless service used to handle incoming requests from Workers. It is expected that an external load balancing mechanism is used to distribute load between Front End instances.")]),e._v(" "),r("li",[e._v("History Service: where the core logic of orchestrating workflow steps and activities is implemented")]),e._v(" "),r("li",[e._v("Matching Service: matches workflow/activity tasks that need to be executed to workflow/activity workers that are able to execute them. Matching is assigned task for execution by the history service")]),e._v(" "),r("li",[e._v("Internal Worker Service: implements Cadence workflows and activities for internal requirements such as archiving")]),e._v(" "),r("li",[e._v("Workers: are effectively the client apps for Cadence. This is where user created workflow and activity logic is executed")])]),e._v(" "),r("p",[e._v("Internally it depends on a persistent store. Currently, Apache Cassandra, MySQL, PostgreSQL, CockroachDB ("),r("a",{attrs:{href:"https://www.cockroachlabs.com/docs/stable/postgresql-compatibility.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("PostgreSQL compatible"),r("OutboundLink")],1),e._v(") and TiDB ("),r("a",{attrs:{href:"https://docs.pingcap.com/tidb/dev/mysql-compatibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL compatible"),r("OutboundLink")],1),e._v(") stores are supported out of the box. For listing "),r("Term",{attrs:{term:"workflow",show:"workflows"}}),e._v(" using complex predicates, ElasticSearch and OpenSearch cluster can be used.")],1),e._v(" "),r("p",[e._v("Cadence service is responsible for keeping "),r("Term",{attrs:{term:"workflow"}}),e._v(" state and associated durable timers. It maintains internal queues (called "),r("Term",{attrs:{term:"task_list",show:"task_lists"}}),e._v(") which are used to dispatch "),r("Term",{attrs:{term:"task",show:"tasks"}}),e._v(" to external "),r("Term",{attrs:{term:"worker",show:"workers"}}),e._v(".")],1),e._v(" "),r("p",[e._v("Cadence service is multitentant. Therefore it is expected that multiple pools of "),r("Term",{attrs:{term:"worker",show:"workers"}}),e._v(" implementing different use cases connect to the same service instance. For example, at Uber a single service is used by more than a hundred applications. At the same time some external customers deploy an instance of Cadence service per application. For local development, a local Cadence service instance configured through docker-compose is used.")],1),e._v(" "),r("p",[r("img",{attrs:{src:"https://user-images.githubusercontent.com/14902200/160308592-400e11bc-0b21-4dd1-b568-8ac59005e6b7.svg",alt:"Cadence Overview"}})]),e._v(" "),r("h2",{attrs:{id:"workflow-worker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow-worker"}},[e._v("#")]),e._v(" Workflow Worker")]),e._v(" "),r("p",[e._v("Cadence reuses terminology from "),r("em",[e._v("workflow automation")]),e._v(" "),r("Term",{attrs:{term:"domain"}}),e._v(". So fault-oblivious stateful code is called "),r("Term",{attrs:{term:"workflow"}}),e._v(".")],1),e._v(" "),r("p",[e._v("The Cadence service does not execute "),r("Term",{attrs:{term:"workflow"}}),e._v(" code directly. The "),r("Term",{attrs:{term:"workflow"}}),e._v(" code is hosted by an external (from the service point of view) "),r("Term",{attrs:{term:"workflow_worker"}}),e._v(" process. These processes receive "),r("em",[r("Term",{attrs:{term:"decision_task",show:"decision_tasks"}})],1),e._v(" that contain "),r("Term",{attrs:{term:"event",show:"events"}}),e._v(" that the "),r("Term",{attrs:{term:"workflow"}}),e._v(" is expected to handle from the Cadence service, delivers them to the "),r("Term",{attrs:{term:"workflow"}}),e._v(" code, and communicates "),r("Term",{attrs:{term:"workflow"}}),e._v(" "),r("em",[r("Term",{attrs:{term:"decision",show:"decisions"}})],1),e._v(" back to the service.")],1),e._v(" "),r("p",[e._v("As "),r("Term",{attrs:{term:"workflow"}}),e._v(" code is external to the service, it can be implemented in any language that can talk service Thrift API. Currently Java and Go clients are production ready. While Python and C# clients are under development. Let us know if you are interested in contributing a client in your preferred language.")],1),e._v(" "),r("p",[e._v("The Cadence service API doesn't impose any specific "),r("Term",{attrs:{term:"workflow"}}),e._v(" definition language. So a specific "),r("Term",{attrs:{term:"worker"}}),e._v(" can be implemented to execute practically any existing "),r("Term",{attrs:{term:"workflow"}}),e._v(" specification. The model the Cadence team chose to support out of the box is based on the idea of durable function. Durable functions are as close as possible to application business logic with minimal plumbing required.")],1),e._v(" "),r("h2",{attrs:{id:"activity-worker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#activity-worker"}},[e._v("#")]),e._v(" Activity Worker")]),e._v(" "),r("p",[r("Term",{attrs:{term:"workflow",show:"Workflow"}}),e._v(" fault-oblivious code is immune to infrastructure failures. But it has to communicate with the imperfect external world where failures are common. All communication to the external world is done through "),r("Term",{attrs:{term:"activity",show:"activities"}}),e._v(". "),r("Term",{attrs:{term:"activity",show:"Activities"}}),e._v(" are pieces of code that can perform any application-specific action like calling a service, updating a database record, or downloading a file from Amazon S3. Cadence "),r("Term",{attrs:{term:"activity",show:"activities"}}),e._v(" are very feature-rich compared to queuing systems. Example features are "),r("Term",{attrs:{term:"task"}}),e._v(" routing to specific processes, infinite retries, heartbeats, and unlimited execution time.")],1),e._v(" "),r("p",[r("Term",{attrs:{term:"activity",show:"Activities"}}),e._v(" are hosted by "),r("em",[r("Term",{attrs:{term:"activity_worker"}})],1),e._v(" processes that receive "),r("em",[r("Term",{attrs:{term:"activity_task",show:"activity_tasks"}})],1),e._v(" from the Cadence service, invoke correspondent "),r("Term",{attrs:{term:"activity"}}),e._v(" implementations and report back "),r("Term",{attrs:{term:"task"}}),e._v(" completion statuses.")],1),e._v(" "),r("h2",{attrs:{id:"external-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#external-clients"}},[e._v("#")]),e._v(" External Clients")]),e._v(" "),r("p",[r("Term",{attrs:{term:"workflow",show:"Workflow"}}),e._v(" and "),r("Term",{attrs:{term:"activity_worker",show:"activity_workers"}}),e._v(" host "),r("Term",{attrs:{term:"workflow"}}),e._v(" and "),r("Term",{attrs:{term:"activity"}}),e._v(" code. But to create a "),r("Term",{attrs:{term:"workflow"}}),e._v(" instance (an execution in Cadence terminology) the "),r("code",[e._v("StartWorkflowExecution")]),e._v(" Cadence service API call should be used. Usually, "),r("Term",{attrs:{term:"workflow",show:"workflows"}}),e._v(" are started by outside entities like UIs, microservices or CLIs.")],1),e._v(" "),r("p",[e._v("These entities can also:")]),e._v(" "),r("ul",[r("li",[e._v("notify "),r("Term",{attrs:{term:"workflow",show:"workflows"}}),e._v(" about asynchronous external "),r("Term",{attrs:{term:"event",show:"events"}}),e._v(" in the form of "),r("Term",{attrs:{term:"signal",show:"signals"}})],1),e._v(" "),r("li",[e._v("synchronously "),r("Term",{attrs:{term:"query"}}),e._v(" "),r("Term",{attrs:{term:"workflow"}}),e._v(" state")],1),e._v(" "),r("li",[e._v("synchronously wait for a "),r("Term",{attrs:{term:"workflow"}}),e._v(" completion")],1),e._v(" "),r("li",[e._v("cancel, terminate, restart, and reset "),r("Term",{attrs:{term:"workflow",show:"workflows"}})],1),e._v(" "),r("li",[e._v("search for specific "),r("Term",{attrs:{term:"workflow",show:"workflows"}}),e._v(" using list API")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);