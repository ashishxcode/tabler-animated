"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M21 21l-6 -6"}],["path",{"d":"M8 8l-2 2l2 2"}],["path",{"d":"M12 8l2 2l-2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[18,18],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,2,3],"o":[10,10]}];

export const ZoomCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZoomCodeIcon.displayName = "ZoomCodeIcon";
