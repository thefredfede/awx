/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import lookUpName from './lookup-name.factory';

export default
    angular.module('StandardOutHelper', [])
        .factory('LookUpName', lookUpName);
