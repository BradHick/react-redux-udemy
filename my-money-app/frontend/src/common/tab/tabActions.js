export function selectTab(tabId){
  return{
    type: 'TAB_SELECTED',
    payload: tabId
  };
}

export function showTabs(...tabIds){
  const tabsToShoww = {  };
  tabIds.forEach(e => tabsToShoww[e] = true);
  return {
    type: 'TAB_SHOWED',
    payload: tabsToShoww
  };
};