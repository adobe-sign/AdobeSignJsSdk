/*
 *  Copyright 2016 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

(function (factory) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../src/index'), require('./ApiUtils'));
  
}(function (AdobeSignSdk, ApiUtils) {
    'use strict';

    /**
     * This file contains basic utility functions which will be used by the Group Api Tests.
     */
    var GroupUtils = function () {
    };

    var groupsApi = new AdobeSignSdk.GroupsApi(ApiUtils.getContext());
    var groupsModel = AdobeSignSdk.GroupsModel;

    GroupUtils.getGroupsApi = function () {
        return groupsApi;
    };

    GroupUtils.getResourceId = function (groupName) {
        return GroupUtils.isExistingGroup(groupName)
                         .then(function (groupId) {
                             if (groupId == null) {
                                 return GroupUtils.createGroup(groupName);
                             }
                             else {
                                 return groupId;
                             }
                         })
                         .catch(ApiUtils.throwError);
    };

    GroupUtils.isExistingGroup = function (groupName) {
        var opts = {};
        var groupId = null;

        return groupsApi.getGroups(ApiUtils.getValidHeaderParams(),
                                   opts)
                        .then(function (GroupsInfo) {
                            var groupInfoList = GroupsInfo.getGroupInfoList();
                            for (var i = 0; i < groupInfoList.length; i++) {
                                if (groupInfoList[i].getGroupName() === groupName) {
                                    groupId = groupInfoList[i].getGroupId();
                                    return groupId;
                                }
                            }
                            return groupId;
                        })
                        .catch(ApiUtils.throwError);

    };

    GroupUtils.createGroup = function (name) {
        var opts = {};
        var groupCreationInfo = new groupsModel.GroupCreationInfo();
        groupCreationInfo.setGroupName(name);
        return groupsApi.createGroup(ApiUtils.getValidHeaderParams(),
                                     groupCreationInfo,
                                     opts)
                        .then(function (groupCreationResponse) {
                            return groupCreationResponse.getGroupId();
                        })
                        .catch(ApiUtils.throwError);

    };

    GroupUtils.getGroupCreationInfo = function (groupName) {
        var groupCreationInfo = new groupsModel.GroupCreationInfo();
        groupCreationInfo.setGroupName(groupName);
        return groupCreationInfo;
    };


    return GroupUtils;

}));
