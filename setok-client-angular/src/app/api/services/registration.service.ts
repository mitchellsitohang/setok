/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { RegistrationDto } from '../models/registration-dto';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation registrationGet
   */
  static readonly RegistrationGetPath = '/Registration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<RegistrationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RegistrationService.RegistrationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RegistrationDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registrationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<RegistrationDto>> {

    return this.registrationGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<RegistrationDto>>) => r.body as Array<RegistrationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<RegistrationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RegistrationService.RegistrationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RegistrationDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registrationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<RegistrationDto>> {

    return this.registrationGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<RegistrationDto>>) => r.body as Array<RegistrationDto>)
    );
  }

  /**
   * Path part for operation registrationPost
   */
  static readonly RegistrationPostPath = '/Registration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrationPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registrationPost$Plain$Response(params?: {
    body?: RegistrationDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, RegistrationService.RegistrationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegistrationDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registrationPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registrationPost$Plain(params?: {
    body?: RegistrationDto
  },
  context?: HttpContext

): Observable<RegistrationDto> {

    return this.registrationPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<RegistrationDto>) => r.body as RegistrationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrationPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registrationPost$Json$Response(params?: {
    body?: RegistrationDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, RegistrationService.RegistrationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegistrationDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registrationPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  registrationPost$Json(params?: {
    body?: RegistrationDto
  },
  context?: HttpContext

): Observable<RegistrationDto> {

    return this.registrationPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<RegistrationDto>) => r.body as RegistrationDto)
    );
  }

  /**
   * Path part for operation registrationIdGet
   */
  static readonly RegistrationIdGetPath = '/Registration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, RegistrationService.RegistrationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegistrationDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registrationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<RegistrationDto> {

    return this.registrationIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<RegistrationDto>) => r.body as RegistrationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registrationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<RegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, RegistrationService.RegistrationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RegistrationDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registrationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  registrationIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<RegistrationDto> {

    return this.registrationIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<RegistrationDto>) => r.body as RegistrationDto)
    );
  }

}
