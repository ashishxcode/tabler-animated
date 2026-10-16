"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3"}],["path",{"d":"M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3"}],["path",{"d":"M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4"}],["path",{"d":"M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9"}],["path",{"d":"M8 7h-4"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[6,6],"st":0.07},{"fx":"pop","n":[3],"o":[11.99,11.98],"a":0.04}];

export const AB2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AB2Icon.displayName = "AB2Icon";
