let tab = {
    content: <div>Tab Content</div>,
    closable: true,
    title: 'tabb',
};

export const jsxTab = {
    id: 'jsxTab',
    title: 'jsx',
    closable: true,
    content: <div>JSX TAb</div>
};
let count = 0;

function newTab() {
    return {
        id: `newtab${++count}`,
        title: 'New Tab',
        content: (
            <div>
                <p>This panel has an 'add' button defined in panelLock</p>
            </div>),
        minHeight: 150
    };
}

export const BottomPanelData = {
    id: 'bottom-panel',
    tabs: [{
        id: 'bottomTab1',
        title: 'Bottom Tab 1',
        content: (
            <div>
                <p>Bottom Tab  content</p>
            </div>),
        minHeight: 150
    }],
    panelLock: { panelStyle: 'bottom', minHeight: 100 },
    size: 10
}

export let getLayout = (mainRouteComp) => {

    return (
        {
            dockbox: {
                mode: 'horizontal',
                children: [
                    {
                        mode: 'vertical',
                        size: 1000,
                        children: [{
                            id: 'main-panel',
                            tabs: [{
                                id: 'mainTab',
                                title: 'Main Tab',
                                content: (
                                    <div>
                                       {mainRouteComp}
                                    </div>),
                                minHeight: 150
                            }],
                            panelLock: { panelStyle: 'main' },
                            size: 1000
                        }
                        ],
                    },
                    {
                        id: 'panel-right',
                        size: 300,
                        panelLock: { panelStyle: 'right', minWidth: 300 },
                        tabs: [{
                            id: 'tab1',
                            title: 'Tab Right',
                            content: <div>React Component in Tab Right Panel</div>,
                            closable: true,
                        }]
                    },
                ]
            },
        }
    )
}