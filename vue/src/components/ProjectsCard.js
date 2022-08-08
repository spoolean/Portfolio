export default {
    props: {
        projects: {
            type: Array,
            default: []
        }
    },
    render() {
        return(
            <div>
                {
                    this.projects.map((project) => {
                        if (project != null) {
                            return (
                                <b-card
                                    title={project.name}
                                >
                                    <b-card-text>{project.description}</b-card-text>
                                </b-card>
                            );
                        }
                    })
                }
            </div>
        );
    }
}
