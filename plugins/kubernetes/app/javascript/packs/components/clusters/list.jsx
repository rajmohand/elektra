// import { Link } from 'react-router-dom';
// import { DefeatableLink } from 'lib/components/defeatable_link';
// import { Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { FadeTransition } from 'lib/components/transitions';
// import { policy } from 'policy';
// import SearchField from 'lib/components/search_field';
// import ShareItem from './item';
// import AjaxPaginate from 'lib/components/ajax_paginate';
// import { NoShareNetworksPopover } from './no_share_networks_popover';

// const loadingShareNetworksInfo = (
//   <Popover id="popover-loading-share-networks" title="Loading Share Networks ...">
//     Please wait.
//   </Popover>
// );

// const azTooltip = (
//   <Tooltip id="azTooltip">Availability Zone</Tooltip>
// );

// const TableRowFadeTransition = ({ children, ...props }) => (
//   <CSSTransition {...props} timeout={200} classNames="css-transition-fade">
//     {children}
//   </CSSTransition>
// );

export default class ClusterList extends React.Component {
  constructor(props) {
    super(props);
    // this.shareNetwork = this.shareNetwork.bind(this)
    // this.shareRules = this.shareRules.bind(this)
    // this.toolbar = this.toolbar.bind(this)
    // this.renderTable = this.renderTable.bind(this)
    // this.filterShares = this.filterShares.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // load dependencies unless already loaded
    // this.loadDependencies(nextProps)
  }

  componentDidMount() {
    // load dependencies unless already loaded
    // this.loadDependencies(this.props)
  }

  // loadDependencies(props) {
  //   if(!props.active) return;
  //   props.loadSharesOnce()
  //   props.loadShareNetworksOnce()
  //   props.loadAvailabilityZonesOnce()
  // }
  //
  // shareNetwork(share) {
  //   for (let network of this.props.shareNetworks.items) {
  //     if (network.id==share.share_network_id) return network
  //   }
  //   return null
  // }
  //
  // shareRules(share) {
  //   let rules = this.props.shareRules[share.id]
  //   if (!rules) return null;
  //   return rules
  // }
  //
  // filterShares() {
  //   if(!this.props.searchTerm) return this.props.items;
  //
  //   // filter items
  //   const regex = new RegExp(this.props.searchTerm.trim(), "i");
  //   return this.props.items.filter((i) =>
  //     `${i.name} ${i.id} ${i.share_proto} ${i.status}`.search(regex) >= 0
  //   )
  // }

  // toolbar() {
  //   if (!policy.isAllowed('shared_filesystem_storage:share_create')) return null;
  //
  //   let { shareNetworks: {items: shareNetworkItems, isFetching: fetchingShareNetworks} } = this.props
  //   let hasShareNetworks = shareNetworkItems && shareNetworkItems.length>0
  //
  //   return (
  //     <div className='toolbar'>
  //       { this.props.items.length>0 &&
  //         <SearchField
  //           onChange={(term) => this.props.searchShares(term)}
  //           placeholder='name, ID, protocol or status'
  //           text='Searches by name, ID, protocol or status in visible shares list only.
  //                 Entering a search term will automatically start loading the next pages
  //                 and filter the loaded items using the search term. Emptying the search
  //                 input field will show all currently loaded items.'/>
  //       }
  //
  //       <DefeatableLink
  //         to='/shares/new'
  //         className='btn btn-primary'
  //         disabled={!hasShareNetworks}>
  //         Create new
  //       </DefeatableLink>
  //
  //       <TransitionGroup>
  //         { fetchingShareNetworks ? (
  //           <FadeTransition>
  //             <OverlayTrigger trigger="click" placement="top" rootClose overlay={loadingShareNetworksInfo}>
  //               <span className="pull-right"><a href="#"><span className="spinner"></span></a></span>
  //             </OverlayTrigger>
  //           </FadeTransition>
  //         ) : ( !hasShareNetworks &&
  //           <FadeTransition>
  //             <NoShareNetworksPopover className="pull-right"/>
  //           </FadeTransition>
  //         )}
  //       </TransitionGroup>
  //
  //     </div>
  //   )
  // }

  // renderTable() {
  //   let items = this.filterShares()
  //
  //   return (
  //     <div>
  //       <table className='table shares'>
  //         <thead>
  //           <tr>
  //             <th>Name</th>
  //             <th>
  //               AZ
  //               <OverlayTrigger placement="top" overlay={azTooltip}>
  //                 <i className='fa fa-fw fa-info-circle'/>
  //               </OverlayTrigger>
  //             </th>
  //             <th>Protocol</th>
  //             <th>Size</th>
  //             <th>Status</th>
  //             <th>Network</th>
  //             <th></th>
  //           </tr>
  //         </thead>
  //         <TransitionGroup component="tbody">
  //
  //             { items && items.length>0 ? (
  //                 items.map( (share, index) =>
  //                   !share.isHidden && <TableRowFadeTransition key={index}>
  //                       <ShareItem
  //                         share={share}
  //                         shareNetwork={this.shareNetwork(share)}
  //                         shareRules={this.shareRules(share)}
  //                         handleDelete={this.props.handleDelete}
  //                         reloadShare={this.props.reloadShare}
  //                         loadShareRulesOnce={this.props.loadShareRulesOnce}
  //                         policy={this.props.policy}/>
  //                     </TableRowFadeTransition>
  //                 )
  //               ) : (
  //                 <TableRowFadeTransition>
  //                   <tr>
  //                     <td colSpan="6">{ this.props.isFetching ? <span className='spinner'/> : 'No Shares found.' }</td>
  //                   </tr>
  //                 </TableRowFadeTransition>
  //               )
  //             }
  //
  //         </TransitionGroup>
  //       </table>
  //
  //       <AjaxPaginate
  //         hasNext={this.props.hasNext}
  //         isFetching={this.props.isFetching}
  //         onLoadNext={this.props.loadNext}/>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        {/* { this.toolbar() }
        { !policy.isAllowed('shared_filesystem_storage:share_list') ? (
            <span>You are not allowed to see this page</span>
          ) : (
            this.renderTable()
          )
        } */}
        TEST
      </div>
    )
  }
}