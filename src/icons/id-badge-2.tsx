"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 12h3v4h-3l0 -4"}],["path",{"d":"M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6"}],["path",{"d":"M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3"}],["path",{"d":"M14 16h2"}],["path",{"d":"M14 12h4"}]];
const rig: Rig[] = [{"fx":"swing","n":[0,1,2,3,4],"o":[12,4],"a":7}];

export const IdBadge2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IdBadge2Icon.displayName = "IdBadge2Icon";
