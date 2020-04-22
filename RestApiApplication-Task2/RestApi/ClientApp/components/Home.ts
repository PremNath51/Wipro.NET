import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, ConfirmDialog } from 'primeng/primeng';

@Component({
    selector: 'home',
    templateUrl: 'ClientApp/components/Home.html',
    providers: [ConfirmationService]
})
export class HomeComponent implements OnInit {
    trainingData: FormGroup;
    trainingFormShow: boolean;
    alertDisplay: boolean;
    alertMessage: string;
    closeForm: boolean;
    allTrainigs: Training[] = [];

    constructor(private http: Http, private title: Title, private fb: FormBuilder, private confirm: ConfirmationService) {
        this.title.setTitle("Manage Assesments");
        this.addTraining();
    }

    ngOnInit() {
        this.loadTraings();
    }

    addTraining() {
        this.trainingData = this.fb.group({
            TrainingName: [null, Validators.required],
            StartDate: [null, Validators.required],
            EndDate: [null, Validators.required],
        }, { validator: this.dateLessThan('StartDate', 'EndDate') });
    }
    loadTraings() {
        this.http.get('./Api/Data').subscribe(result => {
            this.allTrainigs = result.json();
        });
    }
    saveTraining(training: Training): void {
        this.confirm.confirm({
            message:"Do you want to save the Training Details",
            accept: () => {
                this.http.post('./Api/Data', training).subscribe(result => {
                    var data = result.json();
                    this.alertDisplay = true;
                    this.alertMessage = data.message;
                    this.closeForm = data.isSuccess;
                    this.loadTraings();
                });
            }
        });
    }

    closeMessage() {
        this.alertDisplay = false;
        if (this.closeForm) this.trainingFormShow = false;
    }
    dateLessThan(from: string, to: string) {
        return (group: FormGroup): { [key: string]: any } => {
            let f = group.controls[from];
            let t = group.controls[to];
            if (f.value > t.value) {
                return {
                    dates: "Start date should be less than from date"
                };
            }
            return {};
        }
    }
}
class Training {
    TrainingId: number = null;
    TrainingName: string = null;
    StartDate: Date = null;
    EndDate: Date = null;
    Difference: string = null;
}
