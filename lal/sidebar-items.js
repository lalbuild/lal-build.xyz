initSidebarItems({"enum":[["BackendConfiguration","An enum struct for the currently configured `Backend`"],["CliError","The one and only error type for the lal library"],["ManifestLocation","An enum to clarify intent"]],"fn":[["build","Runs the `./BUILD` script in a container and packages artifacts."],["clean","Clean old artifacts in cache directory"],["config_dir","Master override for where the .lal config lives"],["configure","Create  `~/.lal/config` with defaults"],["docker_run","Runs an arbitrary command in the configured docker environment"],["export","Export a specific component from the storage backend"],["fetch","Fetch all dependencies from `manifest.json`"],["get_latest_lal_version","Entry point for `lal::upgrade`"],["http_download_to_path",""],["init","Generates a blank manifest in the current directory"],["propagate","Outputs the update path to the current manifest for a specific component"],["publish","Publish a release build to the storage backend"],["query","Prints a list of versions associated with a component"],["remove","Remove specific components from `./INPUT` and the manifest."],["script","Runs a script in `.lal/scripts/` with supplied arguments in a docker shell"],["shell","Mounts and enters `.` in an interactive bash shell using the configured container."],["stash","Saves current build `./OUTPUT` to the local cache under a specific name"],["status","Prints a fancy dependency tree of `./INPUT` to stdout."],["update","Update specific dependencies outside the manifest"],["update_all","Wrapper around update that updates all components"],["upgrade","Check for and possibly upgrade lal when using musl releases"],["verify","Verifies that `./INPUT` satisfies all strictness conditions."]],"mod":[["env","Env module for env subcommand (which has further subcommands)"],["input","Simple INPUT folder analyzer module can be used directly"],["list","List module for all the list-* subcommands"],["manifest","Manifest module can be used directly"],["output","Simple OUTPUT folder helper module"]],"struct":[["ArtifactoryBackend","Everything we need for Artifactory to implement the Backend trait"],["ArtifactoryConfig","Static Artifactory locations"],["BuildOptions","Configurable build flags for `lal build`"],["Component","The basic definition of a component as it exists online"],["ComponentConfiguration","Representation of a value of the manifest.components hash"],["Config","Representation of `~/.lal/config`"],["ConfigDefaults","Representation of a configuration defaults file"],["Container","Representation of a docker container image"],["Credentials","Artifactory credentials"],["DockerRunFlags","Flags for docker run that vary for different use cases"],["LatestLal","Latest lal version - as seen on artifactory"],["Lockfile","Representation of `lockfile.json`"],["Manifest","Representation of `manifest.json`"],["Mount","Docker volume mount representation"],["ShellModes","Various ways to invoke `docker_run`"],["StickyOptions","Representation of .lal/opts"]],"trait":[["Backend","Properties a storage backend of artifacts should have"],["CachedBackend","A secondary trait that builds upon the Backend trait"]],"type":[["LalResult","Type alias to stop having to type out `CliError` everywhere."]]});