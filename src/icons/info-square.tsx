"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 9h.01"}],["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M11 12h1v4h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2],"o":[12,12.5],"a":0.4,"dl":0.12},{"fx":"pop","n":[1],"o":[12,12],"a":0.05}];

export const InfoSquareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
InfoSquareIcon.displayName = "InfoSquareIcon";
