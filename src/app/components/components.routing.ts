import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { CarsouselComponent } from './carsousel/carsousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { TabComponent } from './tab/tab.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ComponentsComponent } from './components.component';




export const ComponentsRoutes: Routes = [
  {
    path: 'components',
   
    children: [
      {
      path: 'buttons',
      component: ButtonsComponent,
      data: {
        heading: 'Buttons'
      }
    }, {
      path: 'progressbar',
      component: ProgressbarComponent,
      data: {
        heading: 'Progress bars'
      }
    }, {
      path: 'pagination',
      component: PaginationComponent,
      data: {
        heading: 'Pagination'
      }
    }, {
      path: 'alert',
      component: AlertComponent,
    }, {
      path: 'carousel',
      component: CarsouselComponent,
      data: {

        heading: 'Carousel'
      }
    }, {
      path: 'collapse',
      component: CollapseComponent,
      data: {
        heading: 'Collapse'
      }
    }, {
      path: 'datepicker',
      component: DatepickerComponent,
      data: {
        heading: 'Datepicker'
      }
    }, {
      path: 'dropdown',
      component: DropdownComponent,
      data: {
        heading: 'Dropdown'
      }
    }, {
      path: 'modal',
      component: ModalComponent,
      data: {
        heading: 'Modal'
      }
    }, {
      path: 'popover',
      component: PopoverComponent,
      data: {
        heading: 'Popovers'
      }
    }, {
      path: 'rating',
      component: RatingComponent,
      data: {
        heading: 'Rating'
      }
    }, {
      path: 'timepicker',
      component: TimepickerComponent,
      data: {
        heading: 'Timepicker'
      }
    }, {
      path: 'tooltip',
      component: TooltipComponent,
      data: {
        heading: 'Tooltips'
      }
    }, {
      path: 'typeahead',
      component: TypeaheadComponent,
      data: {
        heading: 'Typeahead'
      }
    }]
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(ComponentsRoutes);