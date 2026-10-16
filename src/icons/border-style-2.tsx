"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18v.01"}],["path",{"d":"M8 18v.01"}],["path",{"d":"M12 18v.01"}],["path",{"d":"M16 18v.01"}],["path",{"d":"M20 18v.01"}],["path",{"d":"M18 12h2"}],["path",{"d":"M11 12h2"}],["path",{"d":"M4 12h2"}],["path",{"d":"M4 6h16"}]];
const rig: Rig[] = [{"fx":"pop","n":[8],"o":[12,6],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,18.01],[8,18.01],[12,18.01],[16,18.01],[20,18.01],[19,12],[12,12],[5,12]]}];

export const BorderStyle2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderStyle2Icon.displayName = "BorderStyle2Icon";
