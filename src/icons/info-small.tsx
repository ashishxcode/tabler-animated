"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 9h.01"}],["path",{"d":"M11 12h1v4h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.01,9],"a":0.4,"dl":0.12},{"fx":"pop","n":[1],"o":[12,14],"a":0.05}];

export const InfoSmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
InfoSmallIcon.displayName = "InfoSmallIcon";
