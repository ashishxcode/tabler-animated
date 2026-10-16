"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.999 3l.001 17"}],["path",{"d":"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,11.33],"a":0.08},{"fx":"pop","n":[0],"o":[12,11.5],"a":0.22,"dl":0.1}];

export const DetailsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DetailsIcon.displayName = "DetailsIcon";
