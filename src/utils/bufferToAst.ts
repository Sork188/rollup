// This file is generated by scripts/generate-buffer-to-ast.js.
// Do not edit this file directly.

import type * as estree from 'estree';
import { PanicError, ParseError } from '../ast/nodes/NodeType';
import type { RollupAstNode } from '../rollup/types';
import type { RollupAnnotation } from './astConverterHelpers';
import { ANNOTATION_KEY, convertAnnotations, INVALID_ANNOTATION_KEY } from './astConverterHelpers';
import { EMPTY_ARRAY } from './blank';
import FIXED_STRINGS from './convert-ast-strings';
import type { AstBuffer } from './getAstBuffer';
import { error, getRollupError, logParseError } from './logs';

export function convertProgram(buffer: AstBuffer): ProgramNode {
	const node = convertNode(0, buffer);
	switch (node.type) {
		case PanicError: {
			return error(getRollupError(logParseError(node.message)));
		}
		case ParseError: {
			return error(getRollupError(logParseError(node.message, node.start)));
		}
		default: {
			return node;
		}
	}
}

/* eslint-disable sort-keys */
const nodeConverters: ((position: number, buffer: AstBuffer) => any)[] = [
	function panicError(position, buffer): PanicErrorNode {
		return {
			type: 'PanicError',
			start: buffer[position],
			end: buffer[position + 1],
			message: buffer.convertString(buffer[position + 2])
		};
	},
	function parseError(position, buffer): ParseErrorNode {
		return {
			type: 'ParseError',
			start: buffer[position],
			end: buffer[position + 1],
			message: buffer.convertString(buffer[position + 2])
		};
	},
	function arrayExpression(position, buffer): ArrayExpressionNode {
		return {
			type: 'ArrayExpression',
			start: buffer[position],
			end: buffer[position + 1],
			elements: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function arrayPattern(position, buffer): ArrayPatternNode {
		return {
			type: 'ArrayPattern',
			start: buffer[position],
			end: buffer[position + 1],
			elements: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function arrowFunctionExpression(position, buffer): ArrowFunctionExpressionNode {
		const flags = buffer[position + 2];
		const annotations = convertAnnotations(buffer[position + 3], buffer);
		return {
			type: 'ArrowFunctionExpression',
			start: buffer[position],
			end: buffer[position + 1],
			async: (flags & 1) === 1,
			expression: (flags & 2) === 2,
			generator: (flags & 4) === 4,
			...(annotations.length > 0 ? { [ANNOTATION_KEY]: annotations } : {}),
			params: convertNodeList(buffer[position + 4], buffer),
			body: convertNode(buffer[position + 5], buffer),
			id: null
		};
	},
	function assignmentExpression(position, buffer): AssignmentExpressionNode {
		return {
			type: 'AssignmentExpression',
			start: buffer[position],
			end: buffer[position + 1],
			operator: FIXED_STRINGS[buffer[position + 2]] as estree.AssignmentOperator,
			left: convertNode(buffer[position + 3], buffer),
			right: convertNode(buffer[position + 4], buffer)
		};
	},
	function assignmentPattern(position, buffer): AssignmentPatternNode {
		return {
			type: 'AssignmentPattern',
			start: buffer[position],
			end: buffer[position + 1],
			left: convertNode(buffer[position + 2], buffer),
			right: convertNode(buffer[position + 3], buffer)
		};
	},
	function awaitExpression(position, buffer): AwaitExpressionNode {
		return {
			type: 'AwaitExpression',
			start: buffer[position],
			end: buffer[position + 1],
			argument: convertNode(buffer[position + 2], buffer)
		};
	},
	function binaryExpression(position, buffer): BinaryExpressionNode {
		return {
			type: 'BinaryExpression',
			start: buffer[position],
			end: buffer[position + 1],
			operator: FIXED_STRINGS[buffer[position + 2]] as estree.BinaryOperator,
			left: convertNode(buffer[position + 3], buffer),
			right: convertNode(buffer[position + 4], buffer)
		};
	},
	function blockStatement(position, buffer): BlockStatementNode {
		return {
			type: 'BlockStatement',
			start: buffer[position],
			end: buffer[position + 1],
			body: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function breakStatement(position, buffer): BreakStatementNode {
		const labelPosition = buffer[position + 2];
		return {
			type: 'BreakStatement',
			start: buffer[position],
			end: buffer[position + 1],
			label: labelPosition === 0 ? null : convertNode(labelPosition, buffer)
		};
	},
	function callExpression(position, buffer): CallExpressionNode {
		const flags = buffer[position + 2];
		const annotations = convertAnnotations(buffer[position + 3], buffer);
		return {
			type: 'CallExpression',
			start: buffer[position],
			end: buffer[position + 1],
			optional: (flags & 1) === 1,
			...(annotations.length > 0 ? { [ANNOTATION_KEY]: annotations } : {}),
			callee: convertNode(buffer[position + 4], buffer),
			arguments: convertNodeList(buffer[position + 5], buffer)
		};
	},
	function catchClause(position, buffer): CatchClauseNode {
		const parameterPosition = buffer[position + 2];
		return {
			type: 'CatchClause',
			start: buffer[position],
			end: buffer[position + 1],
			param: parameterPosition === 0 ? null : convertNode(parameterPosition, buffer),
			body: convertNode(buffer[position + 3], buffer)
		};
	},
	function chainExpression(position, buffer): ChainExpressionNode {
		return {
			type: 'ChainExpression',
			start: buffer[position],
			end: buffer[position + 1],
			expression: convertNode(buffer[position + 2], buffer)
		};
	},
	function classBody(position, buffer): ClassBodyNode {
		return {
			type: 'ClassBody',
			start: buffer[position],
			end: buffer[position + 1],
			body: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function classDeclaration(position, buffer): ClassDeclarationNode {
		const idPosition = buffer[position + 3];
		const superClassPosition = buffer[position + 4];
		return {
			type: 'ClassDeclaration',
			start: buffer[position],
			end: buffer[position + 1],
			decorators: convertNodeList(buffer[position + 2], buffer),
			id: idPosition === 0 ? null : convertNode(idPosition, buffer),
			superClass: superClassPosition === 0 ? null : convertNode(superClassPosition, buffer),
			body: convertNode(buffer[position + 5], buffer)
		};
	},
	function classExpression(position, buffer): ClassExpressionNode {
		const idPosition = buffer[position + 3];
		const superClassPosition = buffer[position + 4];
		return {
			type: 'ClassExpression',
			start: buffer[position],
			end: buffer[position + 1],
			decorators: convertNodeList(buffer[position + 2], buffer),
			id: idPosition === 0 ? null : convertNode(idPosition, buffer),
			superClass: superClassPosition === 0 ? null : convertNode(superClassPosition, buffer),
			body: convertNode(buffer[position + 5], buffer)
		};
	},
	function conditionalExpression(position, buffer): ConditionalExpressionNode {
		return {
			type: 'ConditionalExpression',
			start: buffer[position],
			end: buffer[position + 1],
			test: convertNode(buffer[position + 2], buffer),
			consequent: convertNode(buffer[position + 3], buffer),
			alternate: convertNode(buffer[position + 4], buffer)
		};
	},
	function continueStatement(position, buffer): ContinueStatementNode {
		const labelPosition = buffer[position + 2];
		return {
			type: 'ContinueStatement',
			start: buffer[position],
			end: buffer[position + 1],
			label: labelPosition === 0 ? null : convertNode(labelPosition, buffer)
		};
	},
	function debuggerStatement(position, buffer): DebuggerStatementNode {
		return {
			type: 'DebuggerStatement',
			start: buffer[position],
			end: buffer[position + 1]
		};
	},
	function decorator(position, buffer): DecoratorNode {
		return {
			type: 'Decorator',
			start: buffer[position],
			end: buffer[position + 1],
			expression: convertNode(buffer[position + 2], buffer)
		};
	},
	function directive(position, buffer): DirectiveNode {
		return {
			type: 'ExpressionStatement',
			start: buffer[position],
			end: buffer[position + 1],
			directive: buffer.convertString(buffer[position + 2]),
			expression: convertNode(buffer[position + 3], buffer)
		};
	},
	function doWhileStatement(position, buffer): DoWhileStatementNode {
		return {
			type: 'DoWhileStatement',
			start: buffer[position],
			end: buffer[position + 1],
			body: convertNode(buffer[position + 2], buffer),
			test: convertNode(buffer[position + 3], buffer)
		};
	},
	function emptyStatement(position, buffer): EmptyStatementNode {
		return {
			type: 'EmptyStatement',
			start: buffer[position],
			end: buffer[position + 1]
		};
	},
	function exportAllDeclaration(position, buffer): ExportAllDeclarationNode {
		const exportedPosition = buffer[position + 2];
		return {
			type: 'ExportAllDeclaration',
			start: buffer[position],
			end: buffer[position + 1],
			exported: exportedPosition === 0 ? null : convertNode(exportedPosition, buffer),
			source: convertNode(buffer[position + 3], buffer),
			attributes: convertNodeList(buffer[position + 4], buffer)
		};
	},
	function exportDefaultDeclaration(position, buffer): ExportDefaultDeclarationNode {
		return {
			type: 'ExportDefaultDeclaration',
			start: buffer[position],
			end: buffer[position + 1],
			declaration: convertNode(buffer[position + 2], buffer)
		};
	},
	function exportNamedDeclaration(position, buffer): ExportNamedDeclarationNode {
		const sourcePosition = buffer[position + 3];
		const declarationPosition = buffer[position + 5];
		return {
			type: 'ExportNamedDeclaration',
			start: buffer[position],
			end: buffer[position + 1],
			specifiers: convertNodeList(buffer[position + 2], buffer),
			source: sourcePosition === 0 ? null : convertNode(sourcePosition, buffer),
			attributes: convertNodeList(buffer[position + 4], buffer),
			declaration: declarationPosition === 0 ? null : convertNode(declarationPosition, buffer)
		};
	},
	function exportSpecifier(position, buffer): ExportSpecifierNode {
		const local = convertNode(buffer[position + 2], buffer);
		const exportedPosition = buffer[position + 3];
		return {
			type: 'ExportSpecifier',
			start: buffer[position],
			end: buffer[position + 1],
			local,
			exported: exportedPosition === 0 ? { ...local } : convertNode(exportedPosition, buffer)
		};
	},
	function expressionStatement(position, buffer): ExpressionStatementNode {
		return {
			type: 'ExpressionStatement',
			start: buffer[position],
			end: buffer[position + 1],
			expression: convertNode(buffer[position + 2], buffer)
		};
	},
	function forInStatement(position, buffer): ForInStatementNode {
		return {
			type: 'ForInStatement',
			start: buffer[position],
			end: buffer[position + 1],
			left: convertNode(buffer[position + 2], buffer),
			right: convertNode(buffer[position + 3], buffer),
			body: convertNode(buffer[position + 4], buffer)
		};
	},
	function forOfStatement(position, buffer): ForOfStatementNode {
		const flags = buffer[position + 2];
		return {
			type: 'ForOfStatement',
			start: buffer[position],
			end: buffer[position + 1],
			await: (flags & 1) === 1,
			left: convertNode(buffer[position + 3], buffer),
			right: convertNode(buffer[position + 4], buffer),
			body: convertNode(buffer[position + 5], buffer)
		};
	},
	function forStatement(position, buffer): ForStatementNode {
		const initPosition = buffer[position + 2];
		const testPosition = buffer[position + 3];
		const updatePosition = buffer[position + 4];
		return {
			type: 'ForStatement',
			start: buffer[position],
			end: buffer[position + 1],
			init: initPosition === 0 ? null : convertNode(initPosition, buffer),
			test: testPosition === 0 ? null : convertNode(testPosition, buffer),
			update: updatePosition === 0 ? null : convertNode(updatePosition, buffer),
			body: convertNode(buffer[position + 5], buffer)
		};
	},
	function functionDeclaration(position, buffer): FunctionDeclarationNode {
		const flags = buffer[position + 2];
		const annotations = convertAnnotations(buffer[position + 3], buffer);
		const idPosition = buffer[position + 4];
		return {
			type: 'FunctionDeclaration',
			start: buffer[position],
			end: buffer[position + 1],
			async: (flags & 1) === 1,
			generator: (flags & 2) === 2,
			...(annotations.length > 0 ? { [ANNOTATION_KEY]: annotations } : {}),
			id: idPosition === 0 ? null : convertNode(idPosition, buffer),
			params: convertNodeList(buffer[position + 5], buffer),
			body: convertNode(buffer[position + 6], buffer),
			expression: false
		};
	},
	function functionExpression(position, buffer): FunctionExpressionNode {
		const flags = buffer[position + 2];
		const annotations = convertAnnotations(buffer[position + 3], buffer);
		const idPosition = buffer[position + 4];
		return {
			type: 'FunctionExpression',
			start: buffer[position],
			end: buffer[position + 1],
			async: (flags & 1) === 1,
			generator: (flags & 2) === 2,
			...(annotations.length > 0 ? { [ANNOTATION_KEY]: annotations } : {}),
			id: idPosition === 0 ? null : convertNode(idPosition, buffer),
			params: convertNodeList(buffer[position + 5], buffer),
			body: convertNode(buffer[position + 6], buffer),
			expression: false
		};
	},
	function identifier(position, buffer): IdentifierNode {
		return {
			type: 'Identifier',
			start: buffer[position],
			end: buffer[position + 1],
			name: buffer.convertString(buffer[position + 2])
		};
	},
	function ifStatement(position, buffer): IfStatementNode {
		const alternatePosition = buffer[position + 4];
		return {
			type: 'IfStatement',
			start: buffer[position],
			end: buffer[position + 1],
			test: convertNode(buffer[position + 2], buffer),
			consequent: convertNode(buffer[position + 3], buffer),
			alternate: alternatePosition === 0 ? null : convertNode(alternatePosition, buffer)
		};
	},
	function importAttribute(position, buffer): ImportAttributeNode {
		return {
			type: 'ImportAttribute',
			start: buffer[position],
			end: buffer[position + 1],
			key: convertNode(buffer[position + 2], buffer),
			value: convertNode(buffer[position + 3], buffer)
		};
	},
	function importDeclaration(position, buffer): ImportDeclarationNode {
		return {
			type: 'ImportDeclaration',
			start: buffer[position],
			end: buffer[position + 1],
			specifiers: convertNodeList(buffer[position + 2], buffer),
			source: convertNode(buffer[position + 3], buffer),
			attributes: convertNodeList(buffer[position + 4], buffer)
		};
	},
	function importDefaultSpecifier(position, buffer): ImportDefaultSpecifierNode {
		return {
			type: 'ImportDefaultSpecifier',
			start: buffer[position],
			end: buffer[position + 1],
			local: convertNode(buffer[position + 2], buffer)
		};
	},
	function importExpression(position, buffer): ImportExpressionNode {
		const optionsPosition = buffer[position + 3];
		return {
			type: 'ImportExpression',
			start: buffer[position],
			end: buffer[position + 1],
			source: convertNode(buffer[position + 2], buffer),
			options: optionsPosition === 0 ? null : convertNode(optionsPosition, buffer)
		};
	},
	function importNamespaceSpecifier(position, buffer): ImportNamespaceSpecifierNode {
		return {
			type: 'ImportNamespaceSpecifier',
			start: buffer[position],
			end: buffer[position + 1],
			local: convertNode(buffer[position + 2], buffer)
		};
	},
	function importSpecifier(position, buffer): ImportSpecifierNode {
		const importedPosition = buffer[position + 2];
		const local = convertNode(buffer[position + 3], buffer);
		return {
			type: 'ImportSpecifier',
			start: buffer[position],
			end: buffer[position + 1],
			imported: importedPosition === 0 ? { ...local } : convertNode(importedPosition, buffer),
			local
		};
	},
	function jsxElement(position, buffer): JsxElementNode {
		const closingElementPosition = buffer[position + 3];
		return {
			type: 'JsxElement',
			start: buffer[position],
			end: buffer[position + 1],
			openingElement: convertNode(buffer[position + 2], buffer),
			closingElement:
				closingElementPosition === 0 ? null : convertNode(closingElementPosition, buffer),
			children: convertNodeList(buffer[position + 4], buffer)
		};
	},
	function jsxIdentifier(position, buffer): JsxIdentifierNode {
		return {
			type: 'JsxIdentifier',
			start: buffer[position],
			end: buffer[position + 1],
			name: buffer.convertString(buffer[position + 2])
		};
	},
	function jsxOpeningElement(position, buffer): JsxOpeningElementNode {
		const flags = buffer[position + 2];
		return {
			type: 'JsxOpeningElement',
			start: buffer[position],
			end: buffer[position + 1],
			selfClosing: (flags & 1) === 1,
			name: convertNode(buffer[position + 3], buffer),
			attributes: convertNodeList(buffer[position + 4], buffer)
		};
	},
	function jsxText(position, buffer): JsxTextNode {
		return {
			type: 'JsxText',
			start: buffer[position],
			end: buffer[position + 1],
			value: buffer.convertString(buffer[position + 2])
		};
	},
	function labeledStatement(position, buffer): LabeledStatementNode {
		return {
			type: 'LabeledStatement',
			start: buffer[position],
			end: buffer[position + 1],
			label: convertNode(buffer[position + 2], buffer),
			body: convertNode(buffer[position + 3], buffer)
		};
	},
	function literalBigInt(position, buffer): LiteralBigIntNode {
		const bigint = buffer.convertString(buffer[position + 2]);
		return {
			type: 'Literal',
			start: buffer[position],
			end: buffer[position + 1],
			bigint,
			raw: buffer.convertString(buffer[position + 3]),
			value: BigInt(bigint)
		};
	},
	function literalBoolean(position, buffer): LiteralBooleanNode {
		const flags = buffer[position + 2];
		const value = (flags & 1) === 1;
		return {
			type: 'Literal',
			start: buffer[position],
			end: buffer[position + 1],
			value,
			raw: value ? 'true' : 'false'
		};
	},
	function literalNull(position, buffer): LiteralNullNode {
		return {
			type: 'Literal',
			start: buffer[position],
			end: buffer[position + 1],
			raw: 'null',
			value: null
		};
	},
	function literalNumber(position, buffer): LiteralNumberNode {
		const rawPosition = buffer[position + 2];
		return {
			type: 'Literal',
			start: buffer[position],
			end: buffer[position + 1],
			raw: rawPosition === 0 ? undefined : buffer.convertString(rawPosition),
			value: new DataView(buffer.buffer).getFloat64((position + 3) << 2, true)
		};
	},
	function literalRegExp(position, buffer): LiteralRegExpNode {
		const flags = buffer.convertString(buffer[position + 2]);
		const pattern = buffer.convertString(buffer[position + 3]);
		return {
			type: 'Literal',
			start: buffer[position],
			end: buffer[position + 1],
			raw: `/${pattern}/${flags}`,
			regex: { flags, pattern },
			value: new RegExp(pattern, flags)
		};
	},
	function literalString(position, buffer): LiteralStringNode {
		const rawPosition = buffer[position + 3];
		return {
			type: 'Literal',
			start: buffer[position],
			end: buffer[position + 1],
			value: buffer.convertString(buffer[position + 2]),
			raw: rawPosition === 0 ? undefined : buffer.convertString(rawPosition)
		};
	},
	function logicalExpression(position, buffer): LogicalExpressionNode {
		return {
			type: 'LogicalExpression',
			start: buffer[position],
			end: buffer[position + 1],
			operator: FIXED_STRINGS[buffer[position + 2]] as estree.LogicalOperator,
			left: convertNode(buffer[position + 3], buffer),
			right: convertNode(buffer[position + 4], buffer)
		};
	},
	function memberExpression(position, buffer): MemberExpressionNode {
		const flags = buffer[position + 2];
		return {
			type: 'MemberExpression',
			start: buffer[position],
			end: buffer[position + 1],
			computed: (flags & 1) === 1,
			optional: (flags & 2) === 2,
			object: convertNode(buffer[position + 3], buffer),
			property: convertNode(buffer[position + 4], buffer)
		};
	},
	function metaProperty(position, buffer): MetaPropertyNode {
		return {
			type: 'MetaProperty',
			start: buffer[position],
			end: buffer[position + 1],
			meta: convertNode(buffer[position + 2], buffer),
			property: convertNode(buffer[position + 3], buffer)
		};
	},
	function methodDefinition(position, buffer): MethodDefinitionNode {
		const flags = buffer[position + 2];
		return {
			type: 'MethodDefinition',
			start: buffer[position],
			end: buffer[position + 1],
			static: (flags & 1) === 1,
			computed: (flags & 2) === 2,
			decorators: convertNodeList(buffer[position + 3], buffer),
			key: convertNode(buffer[position + 4], buffer),
			value: convertNode(buffer[position + 5], buffer),
			kind: FIXED_STRINGS[buffer[position + 6]] as estree.MethodDefinition['kind']
		};
	},
	function newExpression(position, buffer): NewExpressionNode {
		const annotations = convertAnnotations(buffer[position + 2], buffer);
		return {
			type: 'NewExpression',
			start: buffer[position],
			end: buffer[position + 1],
			...(annotations.length > 0 ? { [ANNOTATION_KEY]: annotations } : {}),
			callee: convertNode(buffer[position + 3], buffer),
			arguments: convertNodeList(buffer[position + 4], buffer)
		};
	},
	function objectExpression(position, buffer): ObjectExpressionNode {
		return {
			type: 'ObjectExpression',
			start: buffer[position],
			end: buffer[position + 1],
			properties: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function objectPattern(position, buffer): ObjectPatternNode {
		return {
			type: 'ObjectPattern',
			start: buffer[position],
			end: buffer[position + 1],
			properties: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function privateIdentifier(position, buffer): PrivateIdentifierNode {
		return {
			type: 'PrivateIdentifier',
			start: buffer[position],
			end: buffer[position + 1],
			name: buffer.convertString(buffer[position + 2])
		};
	},
	function program(position, buffer): ProgramNode {
		const invalidAnnotations = convertAnnotations(buffer[position + 3], buffer);
		return {
			type: 'Program',
			start: buffer[position],
			end: buffer[position + 1],
			body: convertNodeList(buffer[position + 2], buffer),
			...(invalidAnnotations.length > 0 ? { [INVALID_ANNOTATION_KEY]: invalidAnnotations } : {}),
			sourceType: 'module'
		};
	},
	function property(position, buffer): PropertyNode {
		const flags = buffer[position + 2];
		const keyPosition = buffer[position + 3];
		const value = convertNode(buffer[position + 4], buffer);
		return {
			type: 'Property',
			start: buffer[position],
			end: buffer[position + 1],
			method: (flags & 1) === 1,
			shorthand: (flags & 2) === 2,
			computed: (flags & 4) === 4,
			key: keyPosition === 0 ? { ...value } : convertNode(keyPosition, buffer),
			value,
			kind: FIXED_STRINGS[buffer[position + 5]] as estree.Property['kind']
		};
	},
	function propertyDefinition(position, buffer): PropertyDefinitionNode {
		const flags = buffer[position + 2];
		const valuePosition = buffer[position + 5];
		return {
			type: 'PropertyDefinition',
			start: buffer[position],
			end: buffer[position + 1],
			static: (flags & 1) === 1,
			computed: (flags & 2) === 2,
			decorators: convertNodeList(buffer[position + 3], buffer),
			key: convertNode(buffer[position + 4], buffer),
			value: valuePosition === 0 ? null : convertNode(valuePosition, buffer)
		};
	},
	function restElement(position, buffer): RestElementNode {
		return {
			type: 'RestElement',
			start: buffer[position],
			end: buffer[position + 1],
			argument: convertNode(buffer[position + 2], buffer)
		};
	},
	function returnStatement(position, buffer): ReturnStatementNode {
		const argumentPosition = buffer[position + 2];
		return {
			type: 'ReturnStatement',
			start: buffer[position],
			end: buffer[position + 1],
			argument: argumentPosition === 0 ? null : convertNode(argumentPosition, buffer)
		};
	},
	function sequenceExpression(position, buffer): SequenceExpressionNode {
		return {
			type: 'SequenceExpression',
			start: buffer[position],
			end: buffer[position + 1],
			expressions: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function spreadElement(position, buffer): SpreadElementNode {
		return {
			type: 'SpreadElement',
			start: buffer[position],
			end: buffer[position + 1],
			argument: convertNode(buffer[position + 2], buffer)
		};
	},
	function staticBlock(position, buffer): StaticBlockNode {
		return {
			type: 'StaticBlock',
			start: buffer[position],
			end: buffer[position + 1],
			body: convertNodeList(buffer[position + 2], buffer)
		};
	},
	function superElement(position, buffer): SuperElementNode {
		return {
			type: 'Super',
			start: buffer[position],
			end: buffer[position + 1]
		};
	},
	function switchCase(position, buffer): SwitchCaseNode {
		const testPosition = buffer[position + 2];
		return {
			type: 'SwitchCase',
			start: buffer[position],
			end: buffer[position + 1],
			test: testPosition === 0 ? null : convertNode(testPosition, buffer),
			consequent: convertNodeList(buffer[position + 3], buffer)
		};
	},
	function switchStatement(position, buffer): SwitchStatementNode {
		return {
			type: 'SwitchStatement',
			start: buffer[position],
			end: buffer[position + 1],
			discriminant: convertNode(buffer[position + 2], buffer),
			cases: convertNodeList(buffer[position + 3], buffer)
		};
	},
	function taggedTemplateExpression(position, buffer): TaggedTemplateExpressionNode {
		return {
			type: 'TaggedTemplateExpression',
			start: buffer[position],
			end: buffer[position + 1],
			tag: convertNode(buffer[position + 2], buffer),
			quasi: convertNode(buffer[position + 3], buffer)
		};
	},
	function templateElement(position, buffer): TemplateElementNode {
		const flags = buffer[position + 2];
		const cookedPosition = buffer[position + 3];
		const cooked = cookedPosition === 0 ? undefined : buffer.convertString(cookedPosition);
		const raw = buffer.convertString(buffer[position + 4]);
		return {
			type: 'TemplateElement',
			start: buffer[position],
			end: buffer[position + 1],
			tail: (flags & 1) === 1,
			value: { cooked, raw }
		};
	},
	function templateLiteral(position, buffer): TemplateLiteralNode {
		return {
			type: 'TemplateLiteral',
			start: buffer[position],
			end: buffer[position + 1],
			quasis: convertNodeList(buffer[position + 2], buffer),
			expressions: convertNodeList(buffer[position + 3], buffer)
		};
	},
	function thisExpression(position, buffer): ThisExpressionNode {
		return {
			type: 'ThisExpression',
			start: buffer[position],
			end: buffer[position + 1]
		};
	},
	function throwStatement(position, buffer): ThrowStatementNode {
		return {
			type: 'ThrowStatement',
			start: buffer[position],
			end: buffer[position + 1],
			argument: convertNode(buffer[position + 2], buffer)
		};
	},
	function tryStatement(position, buffer): TryStatementNode {
		const handlerPosition = buffer[position + 3];
		const finalizerPosition = buffer[position + 4];
		return {
			type: 'TryStatement',
			start: buffer[position],
			end: buffer[position + 1],
			block: convertNode(buffer[position + 2], buffer),
			handler: handlerPosition === 0 ? null : convertNode(handlerPosition, buffer),
			finalizer: finalizerPosition === 0 ? null : convertNode(finalizerPosition, buffer)
		};
	},
	function unaryExpression(position, buffer): UnaryExpressionNode {
		return {
			type: 'UnaryExpression',
			start: buffer[position],
			end: buffer[position + 1],
			operator: FIXED_STRINGS[buffer[position + 2]] as estree.UnaryOperator,
			argument: convertNode(buffer[position + 3], buffer),
			prefix: true
		};
	},
	function updateExpression(position, buffer): UpdateExpressionNode {
		const flags = buffer[position + 2];
		return {
			type: 'UpdateExpression',
			start: buffer[position],
			end: buffer[position + 1],
			prefix: (flags & 1) === 1,
			operator: FIXED_STRINGS[buffer[position + 3]] as estree.UpdateOperator,
			argument: convertNode(buffer[position + 4], buffer)
		};
	},
	function variableDeclaration(position, buffer): VariableDeclarationNode {
		return {
			type: 'VariableDeclaration',
			start: buffer[position],
			end: buffer[position + 1],
			kind: FIXED_STRINGS[buffer[position + 2]] as estree.VariableDeclaration['kind'],
			declarations: convertNodeList(buffer[position + 3], buffer)
		};
	},
	function variableDeclarator(position, buffer): VariableDeclaratorNode {
		const initPosition = buffer[position + 3];
		return {
			type: 'VariableDeclarator',
			start: buffer[position],
			end: buffer[position + 1],
			id: convertNode(buffer[position + 2], buffer),
			init: initPosition === 0 ? null : convertNode(initPosition, buffer)
		};
	},
	function whileStatement(position, buffer): WhileStatementNode {
		return {
			type: 'WhileStatement',
			start: buffer[position],
			end: buffer[position + 1],
			test: convertNode(buffer[position + 2], buffer),
			body: convertNode(buffer[position + 3], buffer)
		};
	},
	function yieldExpression(position, buffer): YieldExpressionNode {
		const flags = buffer[position + 2];
		const argumentPosition = buffer[position + 3];
		return {
			type: 'YieldExpression',
			start: buffer[position],
			end: buffer[position + 1],
			delegate: (flags & 1) === 1,
			argument: argumentPosition === 0 ? null : convertNode(argumentPosition, buffer)
		};
	}
];

export type PanicErrorNode = RollupAstNode<{ type: 'PanicError'; message: string }>;
export type ParseErrorNode = RollupAstNode<{ type: 'ParseError'; message: string }>;
export type ArrayExpressionNode = RollupAstNode<estree.ArrayExpression>;
export type ArrayPatternNode = RollupAstNode<estree.ArrayPattern>;
export type ArrowFunctionExpressionNode = RollupAstNode<estree.ArrowFunctionExpression> & {
	[ANNOTATION_KEY]?: readonly RollupAnnotation[];
	id: null;
};
export type AssignmentExpressionNode = RollupAstNode<estree.AssignmentExpression>;
export type AssignmentPatternNode = RollupAstNode<estree.AssignmentPattern>;
export type AwaitExpressionNode = RollupAstNode<estree.AwaitExpression>;
export type BinaryExpressionNode = RollupAstNode<estree.BinaryExpression>;
export type BlockStatementNode = RollupAstNode<estree.BlockStatement>;
export type BreakStatementNode = RollupAstNode<estree.BreakStatement>;
export type CallExpressionNode = RollupAstNode<estree.SimpleCallExpression> & {
	[ANNOTATION_KEY]?: readonly RollupAnnotation[];
};
export type CatchClauseNode = RollupAstNode<estree.CatchClause>;
export type ChainExpressionNode = RollupAstNode<estree.ChainExpression>;
export type ClassBodyNode = RollupAstNode<estree.ClassBody>;
export type ClassDeclarationNode = RollupAstNode<estree.ClassDeclaration>;
export type ClassExpressionNode = RollupAstNode<estree.ClassExpression>;
export type ConditionalExpressionNode = RollupAstNode<estree.ConditionalExpression>;
export type ContinueStatementNode = RollupAstNode<estree.ContinueStatement>;
export type DebuggerStatementNode = RollupAstNode<estree.DebuggerStatement>;
export type DecoratorNode = RollupAstNode<estree.Decorator>;
export type DirectiveNode = RollupAstNode<estree.Directive>;
export type DoWhileStatementNode = RollupAstNode<estree.DoWhileStatement>;
export type EmptyStatementNode = RollupAstNode<estree.EmptyStatement>;
export type ExportAllDeclarationNode = RollupAstNode<
	estree.ExportAllDeclaration & { attributes: ImportAttributeNode[] }
>;
export type ExportDefaultDeclarationNode = RollupAstNode<estree.ExportDefaultDeclaration>;
export type ExportNamedDeclarationNode = RollupAstNode<
	estree.ExportNamedDeclaration & { attributes: ImportAttributeNode[] }
>;
export type ExportSpecifierNode = RollupAstNode<estree.ExportSpecifier>;
export type ExpressionStatementNode = RollupAstNode<estree.ExpressionStatement>;
export type ForInStatementNode = RollupAstNode<estree.ForInStatement>;
export type ForOfStatementNode = RollupAstNode<estree.ForOfStatement>;
export type ForStatementNode = RollupAstNode<estree.ForStatement>;
export type FunctionDeclarationNode = RollupAstNode<estree.FunctionDeclaration> & {
	[ANNOTATION_KEY]?: readonly RollupAnnotation[];
	expression: false;
};
export type FunctionExpressionNode = RollupAstNode<estree.FunctionExpression> & {
	[ANNOTATION_KEY]?: readonly RollupAnnotation[];
	expression: false;
};
export type IdentifierNode = RollupAstNode<estree.Identifier>;
export type IfStatementNode = RollupAstNode<estree.IfStatement>;
export type ImportAttributeNode = RollupAstNode<{
	key: estree.Identifier | estree.Literal;
	type: 'ImportAttribute';
	value: estree.Literal;
}>;
export type ImportDeclarationNode = RollupAstNode<
	estree.ImportDeclaration & { attributes: ImportAttributeNode[] }
>;
export type ImportDefaultSpecifierNode = RollupAstNode<estree.ImportDefaultSpecifier>;
export type ImportExpressionNode = RollupAstNode<
	estree.ImportExpression & { options: estree.Expression | null }
>;
export type ImportNamespaceSpecifierNode = RollupAstNode<estree.ImportNamespaceSpecifier>;
export type ImportSpecifierNode = RollupAstNode<estree.ImportSpecifier>;
export type JsxElementNode = RollupAstNode<any>;
export type JsxIdentifierNode = RollupAstNode<any>;
export type JsxOpeningElementNode = RollupAstNode<any>;
export type JsxTextNode = RollupAstNode<any>;
export type LabeledStatementNode = RollupAstNode<estree.LabeledStatement>;
export type LiteralBigIntNode = RollupAstNode<estree.BigIntLiteral>;
export type LiteralBooleanNode = RollupAstNode<estree.SimpleLiteral & { value: boolean }>;
export type LiteralNullNode = RollupAstNode<estree.SimpleLiteral & { value: null }> & {
	raw: 'null';
};
export type LiteralNumberNode = RollupAstNode<estree.SimpleLiteral & { value: number }>;
export type LiteralRegExpNode = RollupAstNode<estree.RegExpLiteral>;
export type LiteralStringNode = RollupAstNode<estree.SimpleLiteral & { value: string }>;
export type LogicalExpressionNode = RollupAstNode<estree.LogicalExpression>;
export type MemberExpressionNode = RollupAstNode<estree.MemberExpression>;
export type MetaPropertyNode = RollupAstNode<estree.MetaProperty>;
export type MethodDefinitionNode = RollupAstNode<estree.MethodDefinition>;
export type NewExpressionNode = RollupAstNode<estree.NewExpression> & {
	[ANNOTATION_KEY]?: readonly RollupAnnotation[];
};
export type ObjectExpressionNode = RollupAstNode<estree.ObjectExpression>;
export type ObjectPatternNode = RollupAstNode<estree.ObjectPattern>;
export type PrivateIdentifierNode = RollupAstNode<estree.PrivateIdentifier>;
export type ProgramNode = RollupAstNode<estree.Program> & {
	[INVALID_ANNOTATION_KEY]?: readonly RollupAnnotation[];
	sourceType: 'module';
};
export type PropertyNode = RollupAstNode<estree.Property>;
export type PropertyDefinitionNode = RollupAstNode<estree.PropertyDefinition>;
export type RestElementNode = RollupAstNode<estree.RestElement>;
export type ReturnStatementNode = RollupAstNode<estree.ReturnStatement>;
export type SequenceExpressionNode = RollupAstNode<estree.SequenceExpression>;
export type SpreadElementNode = RollupAstNode<estree.SpreadElement>;
export type StaticBlockNode = RollupAstNode<estree.StaticBlock>;
export type SuperElementNode = RollupAstNode<estree.Super>;
export type SwitchCaseNode = RollupAstNode<estree.SwitchCase>;
export type SwitchStatementNode = RollupAstNode<estree.SwitchStatement>;
export type TaggedTemplateExpressionNode = RollupAstNode<estree.TaggedTemplateExpression>;
export type TemplateElementNode = RollupAstNode<estree.TemplateElement>;
export type TemplateLiteralNode = RollupAstNode<estree.TemplateLiteral>;
export type ThisExpressionNode = RollupAstNode<estree.ThisExpression>;
export type ThrowStatementNode = RollupAstNode<estree.ThrowStatement>;
export type TryStatementNode = RollupAstNode<estree.TryStatement>;
export type UnaryExpressionNode = RollupAstNode<estree.UnaryExpression> & { prefix: true };
export type UpdateExpressionNode = RollupAstNode<estree.UpdateExpression>;
export type VariableDeclarationNode = RollupAstNode<estree.VariableDeclaration>;
export type VariableDeclaratorNode = RollupAstNode<estree.VariableDeclarator>;
export type WhileStatementNode = RollupAstNode<estree.WhileStatement>;
export type YieldExpressionNode = RollupAstNode<estree.YieldExpression>;

export function convertNode(position: number, buffer: AstBuffer): any {
	const nodeType = buffer[position];
	const converter = nodeConverters[nodeType];
	/* istanbul ignore if: This should never be executed but is a safeguard against faulty buffers */
	if (!converter) {
		console.trace();
		throw new Error(`Unknown node type: ${nodeType}`);
	}
	return converter(position + 1, buffer);
}

function convertNodeList(position: number, buffer: AstBuffer): any[] {
	if (position === 0) return EMPTY_ARRAY as never[];
	const length = buffer[position++];
	const list: any[] = [];
	for (let index = 0; index < length; index++) {
		const nodePosition = buffer[position++];
		list.push(nodePosition ? convertNode(nodePosition, buffer) : null);
	}
	return list;
}
