!SLIDE
# An overview of Linux monitoring tools
# 5/9/11

!SLIDE
# Survey of the monitoring landscape

!SLIDE bullets incremental
# htop

* No automation here, but can quickly lead you in the right direction.

!SLIDE bullets incremental
# Nagios

* Mature, therefore well-known
* Known for its great alerting (email, IRC, SMS via plugins)
* Plugins are written in Perl :-/
* Core + web interface
* Opsview

!SLIDE bullets incremental
# Ganglia

* Designed for clusters
* You can define groups of nodes (app, db, queue, FS, etc)
* gmond sends UDP messages to node running gmetad
* Web interface talks to gmetad via TCP

!SLIDE bullets incremental
* Uses RRDTool
* You can talk to RRDTool via basically anything (Shell, Perl, Python, Ruby, Lua, etc)

!SLIDE bullets incremental
# Munin

* Also distributed
* Also uses RRDTool
* Why do I like it more than Ganglia?
* You talk to Munin from plugins, not RRDTool
* Thus, lots of plugins are available.

!SLIDE bullets incremental
# Cacti

* Distributed
* Uses SNMP, not a plugin running on each node
* Uses RRDTool
* Very versatile from a systems perspective, not so much from an app perspective

!SLIDE bullets incremental
# collectd

* Not an interface, just a data collector
* Every 10 seconds by default
* Very efficient
* Some plugins, but they must be Perl :-/

!SLIDE bullets incremental
# Reconnoiter

* Pretty new (first commit was in 2007)
* Runs noitd on each node, stratcond on the master
* Uses PostgreSQL instead of RRDTool
* Has a Cisco IOS-like shell for configuration

!SLIDE bullets incremental
* Realtime!
* Plugins are written in Lua

!SLIDE bullets incremental
# Graphite/StatsD

* Django app for graphing
* Uses URL strings to construct graphs
* Can lay several metrics over each other
* StatsD collects data over UDP and flushes to Graphite

!SLIDE

# Thanks.
