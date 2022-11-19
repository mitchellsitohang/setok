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

import { ItemDto } from '../models/item-dto';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation itemGet
   */
  static readonly ItemGetPath = '/Item';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemGet$Plain(params?: {
  }): Observable<Array<ItemDto>> {

    return this.itemGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemGet$Json(params?: {
  }): Observable<Array<ItemDto>> {

    return this.itemGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDto>>) => r.body as Array<ItemDto>)
    );
  }

  /**
   * Path part for operation itemPost
   */
  static readonly ItemPostPath = '/Item';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemPost$Plain$Response(params?: {
    body?: ItemDto
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemPost$Plain(params?: {
    body?: ItemDto
  }): Observable<ItemDto> {

    return this.itemPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemPost$Json$Response(params?: {
    body?: ItemDto
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemPost$Json(params?: {
    body?: ItemDto
  }): Observable<ItemDto> {

    return this.itemPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Path part for operation itemIdGet
   */
  static readonly ItemIdGetPath = '/Item/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdGet$Plain(params: {
    id: number;
  }): Observable<ItemDto> {

    return this.itemIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdGet$Json(params: {
    id: number;
  }): Observable<ItemDto> {

    return this.itemIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Path part for operation itemIdPut
   */
  static readonly ItemIdPutPath = '/Item/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemIdPut$Plain$Response(params: {
    id: number;
    body?: ItemDto
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemIdPut$Plain(params: {
    id: number;
    body?: ItemDto
  }): Observable<ItemDto> {

    return this.itemIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemIdPut$Json$Response(params: {
    id: number;
    body?: ItemDto
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  itemIdPut$Json(params: {
    id: number;
    body?: ItemDto
  }): Observable<ItemDto> {

    return this.itemIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * Path part for operation itemIdDelete
   */
  static readonly ItemIdDeletePath = '/Item/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdDelete$Plain(params: {
    id: number;
  }): Observable<ItemDto> {

    return this.itemIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `itemIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ItemDto>> {

    const rb = new RequestBuilder(this.rootUrl, ItemService.ItemIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `itemIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  itemIdDelete$Json(params: {
    id: number;
  }): Observable<ItemDto> {

    return this.itemIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDto>) => r.body as ItemDto)
    );
  }

}
