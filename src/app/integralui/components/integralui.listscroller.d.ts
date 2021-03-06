import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseComponent, IntegralUIScrollMode, IntegralUISortOrder } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
import { IntegralUIDataService } from '../services/integralui.data.service';
export declare class IntegralUIListScroller extends IntegralUIBaseComponent {
    protected dataService: IntegralUIDataService;
    protected elemRef: ElementRef;
    protected commonService: IntegralUICommonService;
    protected cmpResolver: ComponentFactoryResolver;
    protected currentList: Array<any>;
    protected options: any;
    private dataItems;
    protected itemList: Array<any>;
    scrollItemList: Array<any>;
    private valueTimer;
    private valueCount;
    private isChangeActive;
    private stopTimer;
    protected hoverItem: any;
    protected currentFocusItem: any;
    protected isKeyboardActive: boolean;
    protected allowUpdate: boolean;
    blockSize: any;
    protected clientRect: any;
    contentOpacity: number;
    contentSize: any;
    protected currentIndex: number;
    protected prevIndex: number;
    protected updateTimer: any;
    protected clientSpace: any;
    contentPos: any;
    protected currentItemSize: any;
    leftRightMarginTop: number;
    topBotomMarginLeft: number;
    itemTemplate: any;
    blockElem: ElementRef;
    leftrightButtonsElem: ElementRef;
    topBottomButtonsElem: ElementRef;
    topBottomButtonsChildElem: ElementRef;
    private currentScrollMode;
    currentScrollPos: any;
    initPos: any;
    maxScrollPos: any;
    protected prevScrollPos: {
        x: number;
        y: number;
    };
    protected scrollSize: {
        width: number;
        height: number;
    };
    protected currentSelection: any;
    private removeIndex;
    protected sortComparer: any;
    protected itemClassName: string;
    protected itemContentClassName: string;
    protected refreshTimer: any;
    items: Array<any>;
    itemSize: any;
    scrollMode: IntegralUIScrollMode;
    selectedItem: any;
    sorting: IntegralUISortOrder;
    afterSelect: EventEmitter<any>;
    beforeSelect: EventEmitter<any>;
    change: EventEmitter<any>;
    clear: EventEmitter<any>;
    itemAdding: EventEmitter<any>;
    itemAdded: EventEmitter<any>;
    itemRemoving: EventEmitter<any>;
    itemRemoved: EventEmitter<any>;
    scrollModeChanged: EventEmitter<any>;
    scrollPosChanged: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    updateComplete: EventEmitter<any>;
    constructor(dataService: IntegralUIDataService, elemRef: ElementRef, commonService?: IntegralUICommonService, cmpResolver?: ComponentFactoryResolver);
    ngOnInit(): void;
    protected initStyle(): void;
    addItem(item: any): void;
    clearItems(): void;
    insertItemAt(item: any, index: number): void;
    insertItemBefore(item: any, refItem: any): void;
    insertItemAfter(item: any, refItem: any): void;
    removeItem(item: any): boolean;
    removeItemAt(index: number): boolean;
    protected callEventAdd(type: string, item: any, index?: number, refItem?: any, flag?: boolean): void;
    protected callEventRemove(item: any, index?: number): boolean;
    protected updateCurrentList(): void;
    private addItemToCurrentList(item);
    protected updateScrollItemList(): void;
    protected updateData(): void;
    protected updateOptions(value?: any): void;
    protected updateDataFields(fields?: any): void;
    cloneItem(item: any): any;
    protected getItemIndex(item: any): number;
    protected isIndexInRange(index: number): boolean;
    protected isItemAllowed(item: any): boolean;
    protected isItemEnabled(item: any): boolean;
    protected isItemHovered(item: any): boolean;
    protected isItemSelected(item: any): boolean;
    itemMouseEnter(e: any, obj: any): void;
    itemMouseLeave(e: any, obj: any): void;
    protected getContentSize(): {
        width: number;
        height: number;
    };
    refresh(): void;
    protected resetLayout(): void;
    suspendLayout(): void;
    resumeLayout(): void;
    updateLayout(): void;
    updateView(): void;
    ctrlMouseWheel(e: any): void;
    itemMouseDown(e: any, obj: any): void;
    itemMouseUp(e: any, obj: any): void;
    itemClickEvent(e: any, obj: any): void;
    itemDblClickEvent(e: any, obj: any): void;
    onMouseDown(e: any, flag?: boolean): void;
    onMouseUp(e: any): void;
    onScroll(e: any): void;
    protected changeHorizontalScrollPos(value: number): void;
    protected changeVerticalScrollPos(value: number): void;
    scrollPos(value?: any): any;
    processMouseWheel(e: any): void;
    protected updateScrollSize(): void;
    private changeValueTimerElapsed(flag?);
    private changeValue(flag?);
    decreaseValue(): void;
    increaseValue(): void;
    private startChange(flag?);
    private stopChange();
    findItemById(id: any): any;
    findItemByText(text: string): any;
    protected callAfterSelectEvent(item: any): void;
    private clearPrevSelection();
    protected processSelection(item: any, value?: any): boolean;
    protected updateSelection(): void;
    protected applySorting(list: Array<any>): void;
    protected isSortingAllowed(): boolean;
    sort(order: IntegralUISortOrder, comparer?: any): void;
    getModifiedControlStyle(): any;
    protected updateItemStyle(obj: any): void;
    protected getItemStyle(value: any): {
        general: any;
        content: any;
    };
    protected getItemGeneralStyle(value: any): any;
    protected getItemContentStyle(value: any): any;
    protected getDefaultListStyle(): {
        general: {
            disabled: any;
            focused: any;
            hovered: any;
            normal: any;
            selected: any;
        };
        item: {
            general: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
            content: {
                disabled: any;
                focused: any;
                normal: any;
                hovered: any;
                selected: any;
            };
        };
    };
    protected getDefaultItemStyle(): {
        general: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
        content: {
            disabled: any;
            focused: any;
            normal: any;
            hovered: any;
            selected: any;
        };
    };
    protected getDefaultItemGeneralStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected getDefaultItemContentStyle(): {
        disabled: any;
        focused: any;
        normal: any;
        hovered: any;
        selected: any;
    };
    protected updateStyle(value: any): void;
}
