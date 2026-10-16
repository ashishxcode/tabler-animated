"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 5v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[18.5,7.5],"dl":0.05,"st":0.07},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const FileHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileHorizontalIcon.displayName = "FileHorizontalIcon";
