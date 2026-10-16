"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"}],["path",{"d":"M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"}],["path",{"d":"M9 12h6"}],["path",{"d":"M9 16h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,5],"dl":0.05,"st":0.07},{"fx":"draw","n":[2,3],"o":[12,14],"dl":0.2},{"fx":"pop","n":[0],"o":[12,13],"a":0.04}];

export const ClipboardTextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClipboardTextIcon.displayName = "ClipboardTextIcon";
