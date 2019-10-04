import React from 'react';
import {fetchStream , editStream} from '../../actions' 
import {connect} from 'react-redux';
import StreamForm from './StreamForm';
import _ from 'lodash';
class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    onSubmit = (formValues) =>{
        console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues)
    }
    render(){
        //return <div>Stream Edit</div>;
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                    initialValues = {_.pick(this.props.stream, 'title', 'description')} 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
 }
 const mapStateTOProps = (state, ownProps) =>  {
    //console.log(ownProps);
    return{
        stream :  state.streams[ownProps.match.params.id]
    }
 }
 export default connect(mapStateTOProps,{fetchStream, editStream})(StreamEdit);