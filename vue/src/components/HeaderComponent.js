import { BCol, BRow } from "bootstrap-vue";

export default {
    name: "Header",
    props: {
        information: null,
    },
    render() {
        return (
            <BRow>
                <BCol cols="4" order="2"><h1>James Roche</h1></BCol>
                <BCol cols="4" order="1">{this.information.Email}</BCol>
                <BCol cols="2" order="3">{this.information.Linkedin}</BCol>
                <BCol cols="2" order="4">{this.information.Github}</BCol>
            </BRow>
        );
    }
};