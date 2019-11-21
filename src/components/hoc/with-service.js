import React from 'react';
import { ServiceConsumer } from '../service-context/service-context';

const withService = () => (Wrapped) => {

    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (productsService) => {
                        return (<Wrapped {...props}
                                         productsService={productsService}/>);
                    }
                }
            </ServiceConsumer>
        );
    }
};

export default withService;
