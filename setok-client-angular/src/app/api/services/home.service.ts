/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Message } from '../models/message';
import { SetokResult } from '../models/setok-result';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation homeGet
   */
  static readonly HomeGetPath = '/Home';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `homeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  homeGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Message>>> {

    const rb = new RequestBuilder(this.rootUrl, HomeService.HomeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Message>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `homeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  homeGet$Plain(params?: {
  }): Observable<Array<Message>> {

    return this.homeGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Message>>) => r.body as Array<Message>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `homeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  homeGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Message>>> {

    const rb = new RequestBuilder(this.rootUrl, HomeService.HomeGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Message>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `homeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  homeGet$Json(params?: {
  }): Observable<Array<Message>> {

    return this.homeGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Message>>) => r.body as Array<Message>)
    );
  }

  /**
   * Path part for operation homePost
   */
  static readonly HomePostPath = '/Home';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `homePost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  homePost$Plain$Response(params?: {
    message?: string;
  }): Observable<StrictHttpResponse<SetokResult>> {

    const rb = new RequestBuilder(this.rootUrl, HomeService.HomePostPath, 'post');
    if (params) {
      rb.query('message', params.message, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SetokResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `homePost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  homePost$Plain(params?: {
    message?: string;
  }): Observable<SetokResult> {

    return this.homePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SetokResult>) => r.body as SetokResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `homePost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  homePost$Json$Response(params?: {
    message?: string;
  }): Observable<StrictHttpResponse<SetokResult>> {

    const rb = new RequestBuilder(this.rootUrl, HomeService.HomePostPath, 'post');
    if (params) {
      rb.query('message', params.message, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SetokResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `homePost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  homePost$Json(params?: {
    message?: string;
  }): Observable<SetokResult> {

    return this.homePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SetokResult>) => r.body as SetokResult)
    );
  }

}
