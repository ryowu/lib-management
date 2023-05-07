import { Injectable } from '@angular/core';

//cdk
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Injectable({
	providedIn: 'root',
})
export class SpinnerService {
	private spinnerTopRef = this.cdkSpinnerCreate();

	constructor(private overlay: Overlay) {}

	private cdkSpinnerCreate() {
		return this.overlay.create({
			hasBackdrop: true,
			backdropClass: 'dark-backdrop',
			positionStrategy: this.overlay
				.position()
				.global()
				.centerHorizontally()
				.centerVertically(),
		});
	}

	public showSpinner() {
		const spinnerPortal = new ComponentPortal(MatProgressSpinner);
		const spinnerRef = this.spinnerTopRef.attach(spinnerPortal);
		spinnerRef.instance.mode = 'indeterminate';
	}

	public stopSpinner() {
		this.spinnerTopRef.detach();
	}
}
