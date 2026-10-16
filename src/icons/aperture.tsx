"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M3.6 15h10.55"}],["path",{"d":"M6.551 4.938l3.26 10.034"}],["path",{"d":"M17.032 4.636l-8.535 6.201"}],["path",{"d":"M20.559 14.51l-8.535 -6.201"}],["path",{"d":"M12.257 20.916l3.261 -10.034"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,3,4,5],"a":0.25,"st":0.08,"os":[[8.88,15],[8.18,9.96],[12.76,7.74],[16.29,11.41],[13.89,15.9]]},{"fx":"tilt","n":[0],"o":[12,12],"a":-3}];

export const ApertureIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ApertureIcon.displayName = "ApertureIcon";
