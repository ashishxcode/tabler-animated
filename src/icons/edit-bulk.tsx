"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2"}],["path",{"d":"M3 11a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2"}],["path",{"d":"M20.385 9.585a2.1 2.1 0 0 0 -2.97 -2.97l-6.415 6.385v3h3l6.385 -6.415"}],["path",{"d":"M16 8l3 3"}],["path",{"d":"M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2"}]];
const rig: Rig[] = [{"fx":"write","n":[0,1,2,3,4],"o":[12,12]}];

export const EditBulkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EditBulkIcon.displayName = "EditBulkIcon";
