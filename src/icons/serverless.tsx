"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 19l3.03 1.748a2 2 0 0 0 1.94 0l6 -3.843a2 2 0 0 0 1.03 -1.753v-6.152l-8 3l-8 3v-6.405c0 -.728 .394 -1.399 1.03 -1.752l6 -3.582a2.05 2.05 0 0 1 2 0l2.97 1.739"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.12}];

export const ServerlessIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ServerlessIcon.displayName = "ServerlessIcon";
