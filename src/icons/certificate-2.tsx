"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M10 7h4"}],["path",{"d":"M10 18v4l2 -1l2 1v-4"}],["path",{"d":"M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,15],"dl":0.05,"st":0.07},{"fx":"draw","n":[1,2],"o":[12,14.5],"dl":0.2},{"fx":"pop","n":[3],"o":[12,11],"a":0.04}];

export const Certificate2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Certificate2Icon.displayName = "Certificate2Icon";
