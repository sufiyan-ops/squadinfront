import { ToastrService } from 'ngx-toastr';
import { ErrorHandler, Inject, Injector, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(@Inject(Injector) private readonly injector: Injector) {
    }

   handleError(error) {
       this.toastrService.error(`An unexpected error occurred.`);
   }

   private get toastrService(): ToastrService {
       return this.injector.get(ToastrService);
   }
}