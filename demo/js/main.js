/**
 * 主页面js
 */
$(function(){
    var data = [
        {id:"A001", parentId: "0", title:"仪表盘",subTitle:"Dashboard Preview", iconClass: "fa fa-dashboard",url: "", orderNum: 1 },
        {id:"A002", parentId: "0", title:"窗口部件",subTitle:"Widgets Preview", iconClass: "fa fa-th",url: "../pagesSimple/widgets.html", orderNum: 2 },
        {id:"A003", parentId: "0", title:"图表",subTitle:"Charts Preview", iconClass: "fa fa-pie-chart",url: "", orderNum: 3 },
        {id:"A004", parentId: "0", title:"界面元素",subTitle:"UI Elements Preview", iconClass: "fa fa-laptop",url: "", orderNum: 4 },
        {id:"A005", parentId: "0", title:"表单",subTitle:"Form Preview", iconClass: "fa fa-edit",url: "", orderNum: 5 },
        {id:"A006", parentId: "0", title:"表格",subTitle:"Table Preview", iconClass: "fa fa-table",url: "", orderNum: 6 },
        {id:"A007", parentId: "0", title:"日历",subTitle:"Calendar Preview", iconClass: "fa fa-calendar",url: "../pagesSimple/calendar.html", orderNum: 7 },
        {id:"A008", parentId: "0", title:"邮箱",subTitle:"Mailbox Preview", iconClass: "fa fa-envelope",url: "../pagesSimple/mailbox/mailbox.html", orderNum: 8 },
        {id:"A009", parentId: "0", title:"小示例",subTitle:"Examples Preview", iconClass: "fa fa-folder",url: "", orderNum: 9 },
        {id:"A001-B001", parentId: "A001", title:"Dashboard v1",subTitle:"Dashboard v1 Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/dashboard/dashboardv1.html", orderNum: 1 },
        {id:"A001-B002", parentId: "A001", title:"Dashboard v2",subTitle:"Dashboard v2 Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/dashboard/dashboardv2.html", orderNum: 2 },
        {id:"A003-B003", parentId: "A003", title:"ChartJS",subTitle:"ChartJS Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/charts/chartjs.html", orderNum: 1 },
        {id:"A003-B004", parentId: "A003", title:"Morris",subTitle:"Morris Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/charts/morris.html", orderNum: 2 },
        {id:"A003-B005", parentId: "A003", title:"Flot",subTitle:"Flot Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/charts/flot.html", orderNum: 3 },
        {id:"A003-B006", parentId: "A003", title:"Inline",subTitle:"Inline Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/charts/inline.html", orderNum: 4 },
        {id:"A003-B007", parentId: "A003", title:"OrgChart",subTitle:"OrgChart Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/charts/orgCharts.html", orderNum: 5 },
        {id:"A004-B008", parentId: "A004", title:"General",subTitle:"General Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/UI/general.html", orderNum: 1 },
        {id:"A004-B009", parentId: "A004", title:"Icons",subTitle:"Icons Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/UI/icons.html", orderNum: 2 },
        {id:"A004-B010", parentId: "A004", title:"Buttons",subTitle:"Buttons Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/UI/buttons.html", orderNum: 3 },
        {id:"A004-B011", parentId: "A004", title:"Sliders",subTitle:"Sliders Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/UI/sliders.html", orderNum: 4 },
        {id:"A004-B012", parentId: "A004", title:"Timeline",subTitle:"Timeline Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/UI/timeline.html", orderNum: 5 },
        {id:"A004-B013", parentId: "A004", title:"Modals",subTitle:"Modals Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/UI/modals.html", orderNum: 6 },
        {id:"A005-B014", parentId: "A005", title:"General Elements",subTitle:"General Elements Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/forms/general.html", orderNum: 1 },
        {id:"A005-B015", parentId: "A005", title:"Advanced Elements",subTitle:"Advanced Elements Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/forms/advanced.html", orderNum: 2 },
        {id:"A005-B016", parentId: "A005", title:"Editors",subTitle:"Editors Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/forms/editors.html", orderNum: 3 },
        {id:"A006-B017", parentId: "A006", title:"Simple tables",subTitle:"Simple tables Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/tables/simple.html", orderNum: 1 },
        {id:"A006-B018", parentId: "A006", title:"Data tables",subTitle:"Data tables Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/tables/data.html", orderNum: 2 },
        {id:"A009-B019", parentId: "A009", title:"Invoice",subTitle:"Invoice Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/invoice.html", orderNum: 1 },
        {id:"A009-B020", parentId: "A009", title:"Profile",subTitle:"Profile Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/profile.html", orderNum: 2 },
        {id:"A009-B021", parentId: "A009", title:"Login",subTitle:"Login Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/login.html", orderNum: 3 },
        {id:"A009-B022", parentId: "A009", title:"Register",subTitle:"Register Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/register.html", orderNum: 4 },
        {id:"A009-B023", parentId: "A009", title:"Lockscreen",subTitle:"Lockscreen Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/lockscreen.html", orderNum: 5},
        {id:"A009-B024", parentId: "A009", title:"Error404",subTitle:"Error404 Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/404.html", orderNum: 6 },
        {id:"A009-B025", parentId: "A009", title:"Error500",subTitle:"Error500 Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/500.html", orderNum: 7 },
        {id:"A009-B026", parentId: "A009", title:"Blank Page",subTitle:"Blank Page Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/blank.html", orderNum: 8 },
        {id:"A009-B027", parentId: "A009", title:"Pace Page",subTitle:"Pace Page Preview", iconClass: "fa fa-circle-o",url: "../pagesSimple/examples/pace.html", orderNum: 9 }
    ];
    $.AdminLTE.extendData({
        sideBarMenu:{
            menuData:data,
            menuContainer:$("#sidebarMenu"),
            menuRootId:0,
            menuStartIndex:1
        },
        breadcrumbContainer:$("#breadcrumb"),
        breadcrumbHome: "main.html",
        mainContent:$("#mainContent")
    },true);

    //搜索事件()
    // $("#search-btn").click(function(){
    //     var searchText=$("#searchText").val().trim();
    //     if(searchText===""||searchText==null){
    //         return;
    //     }
    //     var data=$.AdminLTE.options.sideBarMenu.menuData;
    //     var rootMenu=[];
    //     for(var i=0;i<data.length;i++){
    //         var n=data[i];
    //         if (n.title.indexOf(searchText)>0 || n.subTitle.indexOf(searchText)>0){
    //             rootMenu.push(n);
    //         }
    //         if(i==data.length-1){
    //             $.AdminLTE.extendData({
    //                 sideBarMenu:{
    //                     menuData:rootMenu
    //                 }
    //             },true);
    //         }
    //     }
    // });
});